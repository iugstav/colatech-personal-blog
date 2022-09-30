import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export type Tag = {
  name: string;
  numberOfPosts: number;
};

export type FeedPost = {
  title: string;
  slug: string;
  tag: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
  };
  intro: string;
};

export type Post = {
  data: {
    title: string;
    slug: string;
    tag: string;
    coverImage: string;
    date: string;
    author: {
      name: string;
      image: string;
    };
    intro: string;
  };
  content: string;
};

const postsDirectory = join(process.cwd(), "src/_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const response: Post = {
    data: {
      title: data["title"],
      slug: realSlug,
      tag: data["tag"],
      coverImage: data["coverImage"],
      date: data["date"],
      author: {
        name: data["author"][0].name,
        image: data["author"][1].image,
      },
      intro: data["intro"] ?? "",
    },
    content: content,
  };

  return response;
}

export function getTags() {
  const response: Tag[] = [];

  const slugs = getPostSlugs();
  slugs.map((slug) => {
    const { data } = getPostBySlug(slug);

    if (response.some((tag) => tag.name === data.tag)) {
      const tag = response.find((tag) => tag.name === data.tag);
      tag.numberOfPosts += 1;
    } else {
      response.push({
        name: data.tag,
        numberOfPosts: 1,
      });
    }
  });

  return response;
}

export function getPostsByTag(tagName: string) {
  const { posts } = getFeedPosts();
  const filteredPosts = posts.filter((post) => post.tag === tagName);

  return filteredPosts;
}

export function getFeedPosts() {
  const slugs = getPostSlugs();
  const tags = getTags();
  const posts = slugs.map((slug) => {
    const { data } = getPostBySlug(slug);
    return {
      title: data.title,
      tag: data.tag,
      coverImage: data.coverImage,
      date: data.date,
      slug: data.slug,
      author: {
        name: data.author.name,
      },
      intro: data.intro,
    } as FeedPost;
  });

  return { posts, tags };
}

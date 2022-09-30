import { useEffect } from "react";
import { Feed } from "../components/Feed";
import { LogInAdvice } from "../components/LogInAdvice";
import { Tags } from "../components/Tags";
import { Layout } from "../Layout";
import { getFeedPosts, FeedPost, Tag } from "../lib/api";

type IndexPageProps = {
  posts: FeedPost[];
  tags: Tag[];
};

export default function Index({ posts, tags }: IndexPageProps) {
  useEffect(() => {
    localStorage.setItem("feed.posts", JSON.stringify(posts));
  }, []);

  return (
    <>
      <Layout title="ColaTech | Página principal">
        <main className="max-w-[1170px] mx-auto mb-20 mt-7 grid grid-cols-main gap-x-6">
          <aside className="font-sans-ui">
            {/* <LogInAdvice /> */}
            <Tags tags={tags} />
          </aside>
          <Feed posts={posts} />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const { posts, tags } = getFeedPosts();

  return {
    props: {
      posts,
      tags,
    },
  };
}

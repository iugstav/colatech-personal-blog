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
        <main className=" semi-xl:max-w-[95vw] max-xl:w-[875px] w-[1170px] mx-auto mb-20 mt-7 xl:grid xl:grid-cols-main xl:gap-x-6">
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

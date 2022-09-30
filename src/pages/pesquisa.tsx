import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Feed } from "../components/Feed";
import { Layout } from "../Layout";
import { FeedPost } from "../lib/api";

export default function SearchPage() {
  const [posts, setPosts] = useState<FeedPost[]>([]);
  const router = useRouter();
  const { q } = router.query;
  const isQuerySetted = q !== undefined;

  let formattedQuery: string;
  if (isQuerySetted) {
    formattedQuery = (q as string).replaceAll("-", " ");
  }

  function handlePostSearchByTitle() {
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(formattedQuery.toLowerCase())
    );

    return filteredPosts;
  }

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("feed.posts")));
  }, []);

  return (
    <>
      <Layout title="ColaTech | Pesquisa">
        <main className="w-[875px] mx-auto mt-7 mb-16">
          <p className="mb-7 font-sans-body font-semibold text-double text-read-black">
            {isQuerySetted
              ? `Resultados da pesquisa "${formattedQuery}"`
              : "Resultados"}
          </p>

          {isQuerySetted ? (
            <Feed posts={handlePostSearchByTitle()} />
          ) : (
            <Feed posts={posts} />
          )}
        </main>
      </Layout>
    </>
  );
}

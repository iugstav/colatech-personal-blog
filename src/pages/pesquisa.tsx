import { useRouter } from "next/router";
import { MagnifyingGlass } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { Feed } from "../components/Feed";
import { Layout } from "../Layout";
import { FeedPost } from "../lib/api";

export default function SearchPage() {
  const [searchText, setSearchText] = useState<string>("");
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

  function handleSubmitSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (searchText.length === 0) {
      router.push("/pesquisa");
    } else {
      router.push(`/pesquisa?q=${searchText.replaceAll(" ", "-")}`);
    }
  }

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("feed.posts")));
  }, []);

  return (
    <>
      <Layout title="ColaTech | Pesquisa">
        <main className="semi-xl:max-w-[95vw] max-xl:w-[875px] max-w-[875px] w mx-auto mt-7 mb-16">
          <form
            className={`2sm:w-[95vw] w-[440px] bigger-md:hidden h-10 mx-auto mb-4 bg-white border border-custom-gray rounded flex transition-colors duration-75`}
            onSubmit={handleSubmitSearch}
          >
            <input
              type="text"
              placeholder="Pesquisa..."
              className="md:flex-1 md:bg-transparent md:px-2 md:outline-none"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <button
              type="submit"
              className="w-10 h-full flex justify-center items-center rounded bg-soft-gray"
            >
              <MagnifyingGlass width={26} height={26} />
            </button>
          </form>

          <p className="2sm:text-xl 2sm:mb-5 mb-7 font-sans-body font-semibold text-double text-read-black">
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

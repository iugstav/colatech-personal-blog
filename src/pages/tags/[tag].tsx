import { GetStaticPaths, GetStaticProps } from "next";
import { Feed } from "../../components/Feed";
import { Layout } from "../../Layout";
import { getPostsByTag, getTags } from "../../lib/api";

export default function CategoryPage({ posts, tag }) {
  return (
    <Layout title="ColaTech | Tags">
      <main className="semi-xl:max-w-[95vw] w-[875px] mx-auto mt-7 mb-16">
        <p className="2sm:text-xl md:text-2xl mb-7 font-sans-body font-semibold text-double text-read-black">
          Tag: {tag}
        </p>

        <Feed posts={posts} />
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fixedTagParam = (params.tag as string).replaceAll("-", " ");

  const postsFromSpecificTag = getPostsByTag(fixedTagParam);

  return {
    props: {
      posts: postsFromSpecificTag,
      tag: fixedTagParam,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getTags();

  const formattedTags = tags.map((tag) => tag.name.replaceAll(" ", "-"));

  return {
    paths: formattedTags.map((tag) => {
      return {
        params: {
          tag: tag,
        },
      };
    }),
    fallback: false,
  };
};

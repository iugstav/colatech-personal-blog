import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";

import { PostInfo } from "../../components/PostInfo";
import { Layout } from "../../Layout";
import { getFeedPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Post({ data, content }) {
  return (
    <>
      <Layout title={data.title}>
        <main className="w-[875px] mx-auto mt-7 mb-16">
          <div className="font-sans-ui ml-2 mb-2">
            <button className="w-16 h-8 rounded bg-white text-main-purple font-normal text-lg mr-4">
              Post
            </button>
            {/* <button
            disabled
            className="w-30 h-8 rounded text-soft-dark font-normal text-lg transition-colors hover:bg-custom-gray hover:text-read-black disabled:cursor-not-allowed disabled:bg-transparent disabled:text-custom-gray"
          >
            Discussões
          </button> */}
          </div>
          <article className=" bg-white rounded border border-bg-emphasis flex flex-col items-center font-sans-body text-read-black text-lg">
            <Image
              src={data.coverImage}
              width={875}
              height={340}
              className="rounded-t"
              priority
            />

            <p className="my-4 text-base font-semibold">{data.tag}</p>

            <p className="font-bold text-double mb-8">{data.title}</p>

            <PostInfo
              authorName={data.author.name}
              authorImage={data.author.image}
              date={data.date}
            />

            <div
              className="mb-6 text-read-black prose prose-xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-lg prose-a:font-semibold prose-main-purple hover:prose-a:brightness-200"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </article>
        </main>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug as string);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      data: post.data,
      content: content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = getFeedPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

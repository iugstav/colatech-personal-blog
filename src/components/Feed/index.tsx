import Image from "next/image";
import Link from "next/link";
import { Clock, User } from "phosphor-react";
import { FeedPost } from "../../lib/api";
import { Tag } from "./Tag";

type FeedProps = {
  posts: FeedPost[];
};

export function Feed(props: FeedProps) {
  return (
    <div className="w-full font-sans-body">
      {props.posts.map((post) => (
        <article
          key={post.slug}
          className="overflow-hidden overflow-ellipsis bg-white border border-bg-emphasis rounded mb-6 last-of-type:mb-0"
        >
          <Image
            src={post.coverImage}
            alt={`Imagem de fundo do post ${post.title}`}
            width={875}
            height={340}
            className="rounded-t"
            priority
          />
          <Link href={`/post/${post.slug}`}>
            <a className="inline whitespace-nowrap ml-6 text-read-black text-double font-bold hover:text-main-purple hover:underline">
              {post.title}
            </a>
          </Link>

          <div className="ml-6 mt-2 mb-6 w-full flex text-normal-gray">
            <span className="mr-6 text-sm">
              <Clock width={20} height={20} className="inline mr-1" />
              {post.date}
            </span>
            <span className="text-sm">
              <User width={20} height={20} className="inline mr-1" />
              {post.author.name}
            </span>
          </div>

          <p className="text-lg text-read-black font-regular ml-6 mb-4">
            {post.intro}
          </p>

          <Tag tag={post.tag} />
        </article>
      ))}
    </div>
  );
}

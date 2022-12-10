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
      {props.posts
        .sort(
          (p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime()
        )
        .map((post) => (
          <article
            key={post.slug}
            className="overflow-hidden text-ellipsis w-full bg-white border border-bg-emphasis rounded mb-6 last-of-type:mb-0"
          >
            <Image
              src={post.coverImage}
              alt={`Imagem de fundo do post ${post.title}`}
              width={875}
              height={340}
              layout="intrinsic"
              className="rounded-t"
              priority
            />
            <Link href={`/post/${post.slug}`}>
              <a className="2sm:text-xl 2sm:ml-3 md:text-[1.5rem] whitespace-nowrap ml-6 text-read-black text-double font-bold hover:text-main-purple hover:underline">
                {post.title}
              </a>
            </Link>

            <div className="2sm:hidden ml-6 mt-2 mb-6 w-full flex text-normal-gray">
              <span className="mr-6 text-sm">
                <Clock width={20} height={20} className="inline mr-1" />
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="text-sm">
                <User width={20} height={20} className="inline mr-1" />
                {post.author.name}
              </span>
            </div>

            <p className="2sm:hidden md:text-base w-[95%] text-lg text-read-black font-regular ml-6 mb-4">
              {post.intro}
            </p>

            <Tag tag={post.tag} />
          </article>
        ))}
    </div>
  );
}

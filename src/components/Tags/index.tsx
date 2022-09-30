import Link from "next/link";
import { Tag } from "../../lib/api";

type TagsProps = {
  tags: Tag[];
};

export function Tags(props: TagsProps) {
  return (
    <div className="w-full bg-white border border-bg-emphasis rounded pl-3">
      <h3 className="text-lg font-semibold text-soft-black mt-2 mb-4">Tags</h3>
      <ul className="mb-3">
        {props.tags.map((tag) => (
          <li
            key={tag.name}
            className="text-main-purple text-[1rem] font-medium mb-1 last-of-type:mb-0"
          >
            <Link href={`/tags/${tag.name.replaceAll(" ", "-")}`}>
              <a className="hover:underline underline-offset-4">{tag.name}</a>
            </Link>{" "}
            <span className="text-normal-gray">({tag.numberOfPosts})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

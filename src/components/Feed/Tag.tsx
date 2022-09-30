import Link from "next/link";

type TagProps = {
  tag: string;
};

export function Tag(props: TagProps) {
  const formattedTag = props.tag.replaceAll(" ", "-");

  return (
    <Link href={`/tags/${formattedTag}`}>
      <a className="2sm:mt-3 2sm:text-xs 2sm:font-regular 2sm:ml-3 md:text-sm md:bg-soft-gray md:text-read-black font-semibold text-normal-gray w-fit ml-6 mb-4.5 px-3 py-2 cursor-pointer rounded flex items-center justify-center gap-2 transition-colors hover:bg-soft-gray hover:text-soft-black">
        {props.tag}
      </a>
    </Link>
  );
}

import { ThumbsUp } from "phosphor-react";

type LikeButtonProps = {
  count: Number;
};

export function LikeButton(props: LikeButtonProps) {
  return (
    <button
      type="button"
      className="text-normal-gray w-36 h-10 ml-6 mb-4.5 cursor-pointer rounded flex items-center justify-center gap-2 transition-colors hover:bg-soft-gray hover:text-soft-black"
    >
      <>
        <ThumbsUp width={26} height={26} />
        {props.count} curtidas
      </>
    </button>
  );
}

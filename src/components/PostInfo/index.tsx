import Image from "next/image";

type PostInfoProps = {
  authorName: string;
  authorImage: string;
  date: string;
};

export function PostInfo(props: PostInfoProps) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <Image
        src={props.authorImage}
        width={42}
        height={42}
        layout="fixed"
        alt="Imagem do Autor"
      />
      <div>
        <p className="2sm:text-sm text-base font-bold">{props.authorName}</p>
        <p className="2sm:text-xs font-regular">{props.date}</p>
      </div>
    </div>
  );
}

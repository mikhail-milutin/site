import { ICard } from "@/models/Card";
import { Image } from "antd";
import Line from "@/assets/Line";

interface Props {
  card: ICard;
}

export default function CollectionCard({ card }: Props) {
  return (
    <div className="flex flex-col gap-5 items-center">
      <Image
        src={card.src}
        alt=""
        loading="lazy"
        width={"100%"}
        height={"100%"}
        preview={{ src: card.src }}
        className="object-cover rounded-lg w-full h-full aspect-auto"
      />
      {card.title && (
        <>
          <Line className="fill-[#8D8D8E] stroke-[#8D8D8E] w-full" />
          <div className="text-lg">{card.title}</div>
        </>
      )}
    </div>
  );
}

import { ICard } from "@/models/Card";
import CollectionCard from "@/components/CollectionCard";
import HomeButton from "@/components/HomeButton";
import { Separator } from "@/components/ui/separator";
import { Image } from "antd";
interface Props {
  title: string;
  content?: string;
  cards: ICard[];
}

export default function CollectionPage({ cards, title, content }: Props) {
  return (
    <div className="container">
      <h1 className="sm:text-5xl ssm:text-4xl text-3xl text-center lg:my-10 md:my-8 my-5 tracking-wide">
        {title}
      </h1>

      <Separator className="mb-5 dark" />
      {content && (
        <>
          <p className="md:text-lg sm:text-md text-sm text-center mb-10">
            {content}
          </p>
          <Separator className="dark hidden sm:block" />
        </>
      )}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
        <Image.PreviewGroup>
          {cards.map((card) => (
            <CollectionCard key={card.src} card={card} />
          ))}
        </Image.PreviewGroup>
      </div>
      <HomeButton />
    </div>
  );
}

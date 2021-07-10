import { CardData } from "pages/api/scryfall/cards/search";
import Image from "next/image";

type CardProps = {
  card: CardData;
};

export default function Card({ card }: CardProps) {
  let result = card.image_uris ? (
    <Image
      src={card.image_uris.small}
      alt={card.name}
      width={146}
      height={204}
    />
  ) : (
    "N/A"
  );
  return <p>{result}</p>;
}

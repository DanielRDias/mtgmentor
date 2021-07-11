import { CardData } from "pages/api/scryfall/cards/search";
import Image from "next/image";

type CardProps = {
  card: CardData;
};

export default function Card({ card }: CardProps) {
  let result = card.image_uris ? (
    <div>
      <small>{card.name}</small>
      <br />
      <Image
        src={card.image_uris.small}
        alt={card.name}
        width={146}
        height={204}
      />
    </div>
  ) : card.card_faces ? (
    <div>
      <small>{card.name}</small>
      <br />
      <Image
        src={card.card_faces[0].image_uris.small}
        alt={card.card_faces[0].name}
        width={146}
        height={204}
      />
      <Image
        src={card.card_faces[1].image_uris.small}
        alt={card.card_faces[1].name}
        width={73}
        height={102}
      />
    </div>
  ) : (
    <div>
      N/A
      <small>{card.name}</small>
    </div>
  );
  return <p>{result}</p>;
}

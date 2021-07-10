import { CardData } from "pages/api/scryfall/cards/search";
import Card from "./Card";

type CardListProps = {
  cards: CardData[];
};

export default function CardList({ cards }: CardListProps) {
  return (
    <>
      {cards.map((card) => {
        if (card.cmc == 0 && card.type_line.includes("Land")) {
        } else {
          return <Card key={card.id} card={card} />;
        }
      })}
    </>
  );
}

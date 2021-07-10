import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { CardData, standardCards } from "pages/api/scryfall/cards/search";
import CardList from "components/cards/CardList";

export default function Cards(cards: CardData[]) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deck Page</title>
        <meta name="description" content="Deck page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to MTG Mentor Deck Page</h1>

        <p className={styles.description}>My Deck</p>

        <div className={styles.grid}>
          <h2>Cards &rarr;</h2>
          <CardList cards={cards} />
        </div>
      </main>

      <footer className={styles.footer}>MTG Mentor</footer>
    </div>
  );
}

Cards.getInitialProps = async () => {
  const res = await standardCards();
  return { cards: res.data };
};

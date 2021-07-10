import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Cards() {
  const cards = async () => {
    const response = await fetch(
      "https://api.scryfall.com/cards/search?order=cmc&q=legal%3Astandard"
    );
    var myJson = await response.json(); //extract JSON from the http response
    let cards = myJson.data;
    // do something with myJson
    console.log(myJson);
    // while(myJson.has_more) {
    //   let newResponse = await fetch(myJson.next_page);
    //   myJson = await newResponse.json(); //extract JSON from the http response
    //   cards = myJson.data;
    // }
    console.log(cards);

    return cards;
  };

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
          <p>{cards()}</p>
        </div>
      </main>

      <footer className={styles.footer}>MTG Mentor</footer>
    </div>
  );
}

export interface CardsSearch {
  object: string;
  total_cards: number;
  has_more: boolean;
  next_page: string;
  data?: CardData[] | null;
}

export interface CardData {
  object: string;
  id: string;
  oracle_id: string;
  multiverse_ids?: number[] | null;
  mtgo_id?: number | null;
  tcgplayer_id: number;
  cardmarket_id: number;
  name: string;
  lang: string;
  released_at: string;
  uri: string;
  scryfall_uri: string;
  layout: string;
  highres_image: boolean;
  image_status: string;
  image_uris: ImageUris;
  mana_cost: string;
  cmc: number;
  type_line: string;
  oracle_text: string;
  power: string;
  toughness: string;
  colors?: string[] | null;
  color_indicator?: string[] | null;
  color_identity?: string[] | null;
  keywords?: (string | null)[] | null;
  all_parts?: AllPartsEntity[] | null;
  card_faces: CardFace[];
  legalities: Legalities;
  games?: string[] | null;
  reserved: boolean;
  foil: boolean;
  nonfoil: boolean;
  oversized: boolean;
  promo: boolean;
  reprint: boolean;
  variation: boolean;
  set_id: string;
  set: string;
  set_name: string;
  set_type: string;
  set_uri: string;
  set_search_uri: string;
  scryfall_set_uri: string;
  rulings_uri: string;
  prints_search_uri: string;
  collector_number: string;
  digital: boolean;
  rarity: string;
  card_back_id: string;
  artist: string;
  artist_ids?: string[] | null;
  illustration_id: string;
  border_color: string;
  frame: string;
  frame_effects?: string[] | null;
  full_art: boolean;
  textless: boolean;
  booster: boolean;
  story_spotlight: boolean;
  edhrec_rank?: number | null;
  preview?: Preview | null;
  prices: Prices;
  related_uris: RelatedUris;
  purchase_uris: PurchaseUris;
  flavor_text?: string | null;
}
export interface CardFace {
  object: string;
  name: string;
  mana_cost: string;
  type_line: string;
  oracle_text: string;
  colors: string[];
  flavor_text: string;
  artist: string;
  artist_id: string;
  illustration_id: string;
  image_uris: ImageUris;
}
export interface ImageUris {
  small: string;
  normal: string;
  large: string;
  png: string;
  art_crop: string;
  border_crop: string;
}
export interface AllPartsEntity {
  object: string;
  id: string;
  component: string;
  name: string;
  type_line: string;
  uri: string;
}
export interface Legalities {
  standard: string;
  future: string;
  historic: string;
  gladiator: string;
  pioneer: string;
  modern: string;
  legacy: string;
  pauper: string;
  vintage: string;
  penny: string;
  commander: string;
  brawl: string;
  duel: string;
  oldschool: string;
  premodern: string;
}
export interface Preview {
  source: string;
  source_uri: string;
  previewed_at: string;
}
export interface Prices {
  usd: string;
  usd_foil?: string | null;
  eur: string;
  eur_foil: string;
  tix?: string | null;
}
export interface RelatedUris {
  gatherer: string;
  tcgplayer_infinite_articles: string;
  tcgplayer_infinite_decks: string;
  edhrec: string;
  mtgtop8: string;
}
export interface PurchaseUris {
  tcgplayer: string;
  cardmarket: string;
  cardhoarder: string;
}

export async function standardCards() {
  try {
    let cards = (await fetch(
      "https://api.scryfall.com/cards/search?order=cmc&q=legal%3Astandard"
    ).then((data) => data.json())) as CardsSearch;
    let pages = 0;
    while (cards.has_more && pages < 15) {
      console.log(cards.has_more);
      console.log(cards.total_cards);
      console.log(cards.data?.length);
      console.log(cards.next_page);
      console.log(pages);
      const resp = (await fetch(cards.next_page).then((data) =>
        data.json()
      )) as CardsSearch;
      console.log(resp.total_cards);
      cards.data = cards.data?.concat(resp.data ? resp.data : []);
      cards.has_more = resp.has_more;
      cards.next_page = resp.next_page;
      pages++;
    }
    return cards;
  } catch (err) {
    console.error(`Oeps, something is wrong ${err}`);
  }
}

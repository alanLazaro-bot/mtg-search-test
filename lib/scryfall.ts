export async function searchCards(query: string) {
  const res = await fetch(`https://api.scryfall.com/cards/search?q=${query}`);
  return res.json();
}

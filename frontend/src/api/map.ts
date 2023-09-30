const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;

export async function getShopData(word: string | number) {
  const res = await fetch(`${ENDPOINT}/autocomplete?word=${word}`, {
    method: 'POST',
  });
  const data = await res.json();
  return data;
}

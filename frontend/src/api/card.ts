const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;
export default async function getAllCard() {
  const response = await fetch(`${ENDPOINT}/card/all?userId="test1234"`, {
    method: 'GET',
  });
  const result = await response.json();
  return result;
}

interface GetCardSearchProps {
  company?: string;
  type?: string;
  cardName?: string;
}

export async function getCardSearch({
  company,
  type,
  cardName,
}: GetCardSearchProps) {
  const response = await fetch(
    `${ENDPOINT}/card/search?userId=test1234&company=${company}&type=${type}&cardName=${cardName}`,
    {
      method: 'GET',
    }
  );
  const result = await response.json();
  return result;
}

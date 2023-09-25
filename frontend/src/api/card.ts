const ENDPOINT = 'https://moic.site/api/v1';
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

export async function getCardDetail(cardName: string) {
  const response = await fetch(
    `${ENDPOINT}/card/detail?cardName=${cardName}&userId=test1234`,
    {
      method: 'GET',
    }
  );
  const result = await response.json();
  return result;
}

export async function postCardRegist(cardName: string) {
  const response = await fetch(`${ENDPOINT}/card/regist`, {
    method: 'POST',
    body: JSON.stringify({ cardName, userId: 'test1234' }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
}

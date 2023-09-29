const ENDPOINT = 'https://moic.site/api/v1';

export default async function postGiftRegist(formData: FormData) {
  const response = await fetch(`${ENDPOINT}/gift/regist`, {
    method: 'POST',
    credentials: 'include',
    body: formData,
  });
  const result = await response.json();
  return result;
}

export async function getMyGift() {
  const response = await fetch(`${ENDPOINT}/gift/mygifts?id=test1111`, {
    method: 'GET',
    credentials: 'include',
  });
  const result = await response.json();
  return result;
}

export async function postGiftDelete(imageUrl: string) {
  const response = await fetch(`${ENDPOINT}/gift/delete`, {
    method: 'POST',
    body: JSON.stringify({ imageUrl }),
    credentials: 'include',
  });
  const result = await response.json();
  return result;
}

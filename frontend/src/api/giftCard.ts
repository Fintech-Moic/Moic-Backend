const ENDPOINT = 'https://moic.site/api/v1';

export async function postGifticonRegist(formData: FormData) {
  const response = await fetch(`${ENDPOINT}/gift/regist`, {
    method: 'POST',
    body: formData,
  });
  const result = await response.json();
  return result;
}

export async function getMyGift() {
  const response = await fetch(`${ENDPOINT}/gift/mygifts`, {
    method: 'GET',
    credentials: 'include',
  });
  const result = await response.json();
  return result;
}

const ENDPOINT = 'https://moic.site/api/v1';

export default async function postGifticonRegist(formData: FormData) {
  const response = await fetch(`${ENDPOINT}/gift/regist`, {
    method: 'POST',
    body: formData,
  });
  const result = await response.json();
  return result;
}

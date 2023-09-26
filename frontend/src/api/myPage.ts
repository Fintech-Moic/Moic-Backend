export default async function postVocSuggest(text: string) {
  const response = await fetch('https://moic.site/api/v1/voc', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ text }),
  });
  const result = await response.json();
  return result;
}

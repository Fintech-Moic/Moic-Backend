export default async function postVocSuggest(content: string) {
  const response = await fetch('https://moic.site/api/v1/voc', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ id: 'text123', content }),
  });
  const result = await response.json();
  return result;
}

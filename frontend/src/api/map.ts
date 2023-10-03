const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;

export default async function getShopData(word: string | number) {
  const res = await fetch(`${ENDPOINT}/autocomplete?word=${word}`, {
    method: 'POST',
  });
  const data = await res.json();
  return data;
}

export async function getCategoryShop(category: string) {
  const res = await fetch(`${ENDPOINT}/map/category?category=${category}&latitude=37.5013168&longitude=127.0396597&userId=test1234`, {
    method: 'GET',
  });
  const data = await res.json();
  return data;
}

export async function getSearchedPlace(keyword: string) {
  const res = await fetch(`${ENDPOINT}/map/shops?keyword=${keyword}&latitude=37.5013168&longitude=127.0396597&userId=test1234`, {
    method: 'GET',
  });
  const data = await res.json();
  return data;
}

/* 브랜드 로고 API [S] 호출 횟수 제한으로 임시 주석 처리 */
// export async function getLogoImage() {
//   const name = 'Starbucks';
//   const apiUrl = `https://api.api-ninjas.com/v1/logo?name=${name}`;
//   const apiKey = process.env.NEXT_PUBLIC_LOGO_APPKEY;

//   try {
//     const response = await fetch(apiUrl, {
//       headers: {
//         'X-Api-Key': apiKey
//       }
//     });

//     if (response.status === 200) {
//       const data = await response.json();
//       console.log(data);
//       return data;
//     } else {
//       console.error('Error:', response.status, response.statusText);
//     }
//   } catch (error) {
//     console.error('Request failed:', error.message);
//   }
// }
/* 브랜드 로고 API [E] */

interface Coordinates {
  lat: number;
  lng: number;
}

export async function getDirection(str : Coordinates, fin : Coordinates) {
  const REST_API_KEY = process.env.NEXT_PUBLIC_APPKEY;
  const url = 'https://apis-navi.kakaomobility.com/v1/directions';

  const origin = `${str.lng},${str.lat}`;
  const destination = `${fin.lng},${fin.lat}`;

  const headers = {
    Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
    'Content-Type': 'application/json'
  };

  const queryParams = new URLSearchParams({
    origin: origin,
    destination: destination,
  });

  const requestUrl = `${url}?${queryParams}`;

  try {
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: headers
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

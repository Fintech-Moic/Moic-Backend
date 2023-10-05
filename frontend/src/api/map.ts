import { fetchGet, fetchPost } from '@/util/api';

export const getShopData = async (word: string | number) =>
  fetchPost({ url: `/autocomplete?word=${word}`, isAuth: true });

export const getCategoryShop = (
  category: string,
  latitude: number,
  longitude: number
) =>
  fetchGet({
    url: `/map/category?category=${category}&latitude=${latitude}&longitude=${longitude}`,
    isAuth: true,
  });

export const getSearchedPlace = (
  keyword: string,
  latitude: number,
  longitude: number
) =>
  fetchGet({
    url: `/map/shops?keyword=${keyword}&latitude=${latitude}&longitude=${longitude}`,
    isAuth: true,
  });

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

export const getBenefit = (shopName: string, shopLocation: string) =>
  fetchGet({
    url: `/map/shops/detail?shopName=${shopName}&shopLocation=${shopLocation}`,
    isAuth: true,
  });

interface Coordinates {
  lat: number;
  lng: number;
}

export async function getDirection(str: Coordinates, fin: Coordinates) {
  const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
  const url = 'https://apis-navi.kakaomobility.com/v1/directions';

  const origin = `${str.lng},${str.lat}`;
  const destination = `${fin.lng},${fin.lat}`;

  const headers = {
    Authorization: `KakaoAK ${REST_API_KEY}`,
    'Content-Type': 'application/json',
  };

  const queryParams = new URLSearchParams({
    origin,
    destination,
  });

  const requestUrl = `${url}?${queryParams}`;

  try {
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    const linePath: any = [];
    data.routes[0].sections[0].roads.forEach((router: { vertexes: any[]; }) => {
      router.vertexes.forEach((vertex, index) => {
        if (index % 2 === 0) {
          linePath.push(new kakao.maps.LatLng(router.vertexes[index + 1], router.vertexes[index]));
        }
      });
    });

    console.log(data);
    return { props: {data, linePath}}

  } catch (error) {
    console.error('Error:', error);
    return error;
  }
}

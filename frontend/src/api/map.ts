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

export async function getImageSearchResults(query: string) {
  const apiUrl = 'https://dapi.kakao.com/v2/search/image';
  const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;

  const response = await fetch(
    `${apiUrl}?query=${encodeURIComponent(query)}&page=1&size=10`,
    {
      method: 'GET',
      headers: {
        Authorization: `KakaoAK ${apiKey}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`이미지 데이터 불러오기 실패: ${response.statusText}`);
  }

  const data = await response.json();
  return data.documents[0];
}

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
    data.routes[0].sections[0].roads.forEach((router: { vertexes: any[] }) => {
      router.vertexes.forEach((vertex, index) => {
        if (index % 2 === 0) {
          linePath.push(
            new kakao.maps.LatLng(
              router.vertexes[index + 1],
              router.vertexes[index]
            )
          );
        }
      });
    });
    const howfar = data.routes[0].sections[0].distance;
    return { props: { howfar, linePath } };
  } catch (error) {
    console.error('Error:', error);
    return error;
  }
}

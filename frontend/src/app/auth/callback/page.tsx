'use client';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Page() {
  const location = useLocation();

  useEffect(() => {
    const { accessToken } = parseQueryString(location.search);

    if (accessToken) {
      console.log(accessToken);
      //   localStorage.setItem('access-token', accessToken);

      //   router.push(`/home`);
    } else {
      console.log('accessToken이 없습니다.');
    }
  });

  function parseQueryString(queryString: string): Record<string, string> {
    const query: Record<string, string> = {};
    const pairs = queryString.slice(1).split('&');

    for (const pair of pairs) {
      const [key, value] = pair.split('=');
      if (key && value) {
        query[key] = decodeURIComponent(value);
      }
    }

    return query;
  }

  return null;
}

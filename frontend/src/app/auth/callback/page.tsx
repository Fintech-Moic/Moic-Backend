'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const accessToken = params.get('accessToken');

    if (accessToken) {
      localStorage.setItem('access_token', accessToken);

      router.push(`/home`);
    } else {
      /* TO DO :: ERROR 처리 */
    }
  });

  return null;
}

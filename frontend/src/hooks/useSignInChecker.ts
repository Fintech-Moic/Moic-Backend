import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useAlreadySignInChecker = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      router.push('/home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useNotSignInChecker = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('access_token') === null) {
      router.push('/auth/signIn');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

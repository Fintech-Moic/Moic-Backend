import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useLoginChecker = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('access_token') === null) {
      router.push('/auth/signIn');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useLoginChecker;

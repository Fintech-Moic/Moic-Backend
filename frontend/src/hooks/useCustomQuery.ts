import { useQuery } from '@tanstack/react-query';

const useCustomQuery = (options: any, router: any) => {
  const { data, isSuccess, isError, isLoading } = useQuery<any>({ ...options });

  if (
    data &&
    'errorCode' in data &&
    (data.errorCode === 'SE005' || data.errorCode === 'SE003')
  ) {
    router.replace('/auth/signIn');
  }

  return { data, isSuccess, isError, isLoading };
};

export default useCustomQuery;

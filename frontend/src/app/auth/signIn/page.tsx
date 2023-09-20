'use client';

import AuthForm from '../molecules/AuthForm';

type FormData = {
  username?: string;
  password?: string;
  email?: string;
  name?: string;
  gender?: string;
  age?: string;
};

export default function page() {
  const handleSubmit = (data: FormData) => {
    console.log('Login Data:', data);
  };

  return (
    <div>
      <AuthForm btntitle="로그인 하기" onSubmit={handleSubmit} />
    </div>
  );
}

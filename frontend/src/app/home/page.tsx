'use client';

import { signOutApi } from '@/api/auth';

export default function page() {
  const signOut = async () => {
    const result = await signOutApi();
    console.log(result);
  };
  return (
    <div>
      <div className="t1">모익</div>
      <button type="button" onClick={signOut}>
        로그아웃이에용
      </button>
    </div>
  );
}

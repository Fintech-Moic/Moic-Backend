'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import CardSubTitle from './CardSubTitle';

export default function GiftCardEmptyRegistButton() {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push('/profit/giftCard/regist');
  }, [router]);
  return (
    <button
      type="button"
      className="flex flex-col items-center justify-center"
      onClick={handleClick}
    >
      <Image
        src="/assets/GrayCardIcon.svg"
        alt="빈기프티콘이미지"
        width={196}
        height={160}
      />
      <CardSubTitle size="t2" value="기프티콘이 없어요..." />
      <CardSubTitle size="t4" value="기프티콘 등록하러 가기" />
    </button>
  );
}

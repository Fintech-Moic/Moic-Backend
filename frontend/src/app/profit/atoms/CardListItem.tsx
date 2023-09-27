'use client';

/* eslint-disable react/no-unused-prop-types */
import Image from 'next/image';

interface CardListItemProps {
  listType: string;
  company: string;
  name: string;
  type: string;
  cardImage: string;
  mine: boolean;
}

export default function CardListItem({
  listType,
  company,
  name,
  cardImage,
  mine,
}: CardListItemProps) {
  return (
    <div
      className="flex flex-row align-center gap-4 justify-center cursor-pointer"
      id={name}
    >
      {!mine && listType === 'regist' && (
        <Image
          src="/assets/BlackAddIcon.svg"
          alt="등록아이콘"
          width={20}
          height={20}
        />
      )}
      <img src={cardImage} className="w-[140px] h-[80px]" alt="카드이미지" />
      <div className="flex flex-col justify-start items-start">
        <div className="flex flex-row justify-start items-center gap-0.5">
          <span className="h4b">{company}</span>
          {mine && (
            <Image
              src="/assets/BlackPersonIcon.svg"
              alt="마이아이콘"
              width={16}
              height={20}
            />
          )}
        </div>
        <span className="break-words p2r text-CardSubtitle">{name}</span>
      </div>
    </div>
  );
}
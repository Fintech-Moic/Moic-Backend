'use client';

import Image from 'next/image';
import BlackAddIcon from '@/../public/assets/BlackAddIcon.svg';
import BlackPersonIcon from '@/../public/assets/BlackPersonIcon.svg';

/* eslint-disable react/no-unused-prop-types */

/** 카드 전체 조회 또는 등록 시의 리스트 아이템 컴포넌트
 * @param {String} listType 현재 리스트가 조회인지, 등록인지 타입
 * @param {String} company 카드사
 * @param {String} name 카드의 이름
 * @param {String} type 카드의 신용/체크 카드 타입
 * @param {String} cardImage 카드 이미지
 * @param {Boolean} mine 내 카드 여부
 * @returns {JSX.Element} 컴포넌트 반환
 */
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
        <Image src={BlackAddIcon} alt="등록아이콘" width={20} height={20} />
      )}
      <img src={cardImage} className="w-[140px] h-[80px]" alt="카드이미지" />
      <div className="flex flex-col justify-start items-start">
        <div className="flex flex-row justify-start items-center gap-0.5">
          <span className="h4b">{company}</span>
          {mine && (
            <Image
              src={BlackPersonIcon}
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

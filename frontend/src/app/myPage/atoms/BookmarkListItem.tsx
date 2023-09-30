/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import BlackCheckIcon from '@/../public/assets/BlackCheckIcon.svg';

interface BookmarkListItemProps {
  listType: string;
  category: string;
  shopName: string;
  shopLocation: string;
  address: string;
  latitude: string;
  longitude: string;
  isSelected: boolean;
}

/** 북마크 조회, 삭제 시의 리스트 아이템 컴포넌트
 * @param {String} listType 현재 북마크 리스트의 타입 (일반 읽기, 수정)
 * @param {String} category 해당 가게의 카테고리
 * @param {String} shopName 가게의 이름
 * @param {String} shopLocation 가게의 장소
 * @param {String} address 가게의 도로명 주소
 * @param {String} latitude 위도
 * @param {String} longitude 경도
 * @param {Boolean} isSelected 현재, 수정 모드에서 선택된 리스트 아이템인지 확인하는 조건
 * @returns {JSX.Element} 컴포넌트 반환
 */

export default function BookmarkListItem({
  listType,
  category,
  shopName,
  shopLocation,
  address,
  latitude,
  longitude,
  isSelected = false,
}: BookmarkListItemProps) {
  return (
    <li
      className="w-full flex justify-between items-center"
      id={`${shopName} ${shopLocation}`}
    >
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="flex flex-row items-center justify-center gap-1">
          <h3 className="p2b">
            {shopName} {shopLocation}
          </h3>
          <h4 className="captionr text-CardSubtitle">{category}</h4>
        </div>

        <span className="captionr">{address}</span>
      </div>
      {listType === 'modify' && (
        <div className="relative inline-block align-middle w-5 h-5 cursor-pointer">
          <input
            type="checkbox"
            className="absolute opacity-0 h-full w-full cursor-pointer"
          />
          <div className="box-border flex justify-center items-center w-5 h-5 rounded-md bg-Tertiary transition-all duration-150">
            <Image
              src={BlackCheckIcon}
              alt="클릭아이콘"
              className={`${isSelected ? 'visible' : 'invisible'}`}
            />
          </div>
        </div>
      )}
    </li>
  );
}

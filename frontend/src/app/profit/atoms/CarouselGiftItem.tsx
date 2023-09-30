import Image from 'next/image';
import RedDeleteIcon from '@/../public/assets/RedDeleteIcon.svg';

interface CarouselGiftItemProps {
  canDelete: boolean;
  giftImage: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onClickDelete?: React.MouseEventHandler<HTMLButtonElement>;
}

/** 기프티콘 케러셀의 아이템 컴포넌트
 * @param {Boolean} canDelete 기프티콘 삭제 기능 가능여부
 * @param {String} cardImage 기프티콘 이미지
 * @param {React.MouseEventHandler<HTMLButtonElement>} onClick 기프티콘 클릭 이벤트
 * @param {React.MouseEventHandler<HTMLButtonElement>} onClickDelete 기프티콘 삭제 클릭 이벤트
 * @returns {JSX.Element} 컴포넌트 반환
 */
export default function CarouselGiftItem({
  canDelete,
  giftImage,
  onClick,
  onClickDelete,
}: CarouselGiftItemProps) {
  return (
    <div className="relative">
      <h3 className="w-20 h-32">
        {canDelete && (
          <button
            className="absolute top-0 left-0"
            type="button"
            onClick={onClickDelete}
          >
            <Image src={RedDeleteIcon} alt="카드삭제" width={20} height={20} />
          </button>
        )}
        <button type="button" onClick={onClick}>
          <img
            className="border-solid border-2 border-white shadow-md rounded-[10px] w-20 h-32"
            src={giftImage}
            alt="카드"
          />
        </button>
      </h3>
    </div>
  );
}

import Image from 'next/image';
import RedDeleteIcon from '@/../public/assets/RedDeleteIcon.svg';

interface CarouselCardItemProps {
  canDelete: boolean;
  cardImage: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onClickDelete?: React.MouseEventHandler<HTMLButtonElement>;
}

/** 카드 케러셀의 아이템 컴포넌트
 * @param {Boolean} canDelete 카드 삭제 기능 가능여부
 * @param {String} cardImage 카드 이미지
 * @param {React.MouseEventHandler<HTMLButtonElement>} onClick 카드 클릭 이벤트
 * @param {React.MouseEventHandler<HTMLButtonElement>} onClickDelete 카드 삭제 클릭 이벤트
 * @returns {JSX.Element} 컴포넌트 반환
 */
export default function CarouselCardItem({
  canDelete,
  cardImage,
  onClick,
  onClickDelete,
}: CarouselCardItemProps) {
  return (
    <div className="relative">
      <h3 className="w-32 h-20 origin-top-left rotate-90 absolute left-20">
        {canDelete && (
          <button
            className="absolute bottom-0 rotate-90"
            type="button"
            onClick={onClickDelete}
          >
            <Image src={RedDeleteIcon} alt="카드삭제" width={20} height={20} />
          </button>
        )}
        <button
          type="button"
          onClick={onClick}
          className="border-solid border-2 border-white shadow-md rounded-[10px]"
        >
          <Image width={128} height={80} src={cardImage} alt="카드" />
        </button>
      </h3>
    </div>
  );
}

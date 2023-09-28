import Image from 'next/image';
import RedDeleteIcon from '@/../public/assets/RedDeleteIcon.svg';

interface CarouselCardItemProps {
  canDelete: boolean;
  cardImage: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onClickDelete?: React.MouseEventHandler<HTMLButtonElement>;
}
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
        <button type="button" onClick={onClick}>
          <img
            className="border-solid border-2 border-white shadow-md rounded-[10px]"
            src={cardImage}
            alt="카드"
          />
        </button>
      </h3>
    </div>
  );
}

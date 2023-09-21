/* eslint-disable react/no-unused-prop-types */
interface CardListItemProps {
  company: string;
  name: string;
  type: string;
  cardImage: string;
}

// fix me! 내 카드일 경우 추가 아이콘 띄우기 필요
export default function CardListItem({
  company,
  name,
  cardImage,
}: CardListItemProps) {
  return (
    <div className="flex flex-row align-center gap-4 justify-center">
      <img src={cardImage} className="w-[140px] h-[80px]" alt="카드이미지" />
      <div className="flex flex-col justify-start items-start">
        <div>
          <span className="h4b">{company}</span>
        </div>
        <span className="break-words p2r text-CardSubtitle">{name}</span>
      </div>
    </div>
  );
}

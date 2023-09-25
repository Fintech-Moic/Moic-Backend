import CardBenefitListItem from '../atoms/CardBenefitListItem';

interface CardBenefit {
  category: string;
  shopName: string;
  content: string;
  discount: string;
  point: string;
  cashBack: string;
}

/** 카드 혜택들을 보여주는 리스트
 * @param {React.FormEventHandler<HTMLFormElement>} onSubmit onSubmit 이벤트
 * @returns {JSX.Element} 컴포넌트 반환
 */
interface CardBenefitListProps {
  cardBenefit: Array<CardBenefit>;
}
export default function CardBenefitList({ cardBenefit }: CardBenefitListProps) {
  return (
    <ul className="flex flex-col justify-start item-start gap-4">
      {cardBenefit?.map((curBenefit) => (
        <CardBenefitListItem
          benefit={curBenefit}
          key={`${curBenefit.shopName}_${curBenefit.content}`}
        />
      ))}
    </ul>
  );
}

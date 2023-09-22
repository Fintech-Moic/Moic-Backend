import CardBenefitListItem from '../atoms/CardBenefitListItem';

interface CardBenefit {
  category: string;
  shopName: string;
  content: string;
  discount: string;
  point: string;
  cashBack: string;
}

interface CardBenefitListProps {
  cardBenefit: Array<CardBenefit>;
}
export default function CardBenefitList({ cardBenefit }: CardBenefitListProps) {
  return (
    <ul className="flex flex-col justify-start item-start gap-4">
      {cardBenefit?.map((curBenefit) => (
        <CardBenefitListItem benefit={curBenefit} />
      ))}
    </ul>
  );
}

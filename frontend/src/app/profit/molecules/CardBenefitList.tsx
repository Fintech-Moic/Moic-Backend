import CardBenefitListItem from '../atoms/CardBenefitListItem';
import { CardBenefit } from '@/types/card';

/** 카드 혜택들을 보여주는 리스트
 * @param {Array<CardBenefit>} list 카드 혜택들이 담긴 배열
 * @returns {JSX.Element} 컴포넌트 반환
 */
interface CardBenefitListProps {
  list: Array<CardBenefit>;
}
export default function CardBenefitList({ list }: CardBenefitListProps) {
  return (
    <ul className="flex flex-col justify-start item-start gap-4">
      {list?.map((curBenefit) => (
        <CardBenefitListItem
          key={JSON.stringify(curBenefit)}
          benefit={curBenefit}
        />
      ))}
    </ul>
  );
}

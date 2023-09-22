interface CardBenefit {
  category: string;
  shopName: string;
  content: string;
  discount: string;
  point: string;
  cashBack: string;
}

function createBenefitText(benefit: CardBenefit) {
  const { shopName, content, discount, point, cashBack } = benefit;
  let benefitText = [shopName, content].join(' ');

  if (discount) {
    benefitText += ` ${discount}할인`;
  } else if (point) {
    benefitText += ` ${point}적립`;
  } else if (cashBack) {
    benefitText += ` ${cashBack}적립`;
  }

  return benefitText;
}

/** 카드 혜택 하나를 렌더링 해주는 컴포넌트
 * @param {Object} benefit 카드 혜택 객체
 * @returns {JSX.Element} 컴포넌트 반환
 */
export default function CardBenefitListItem({
  benefit,
}: {
  benefit: CardBenefit;
}) {
  return (
    <li>
      <span className="h4r break-words">{createBenefitText(benefit)}</span>
    </li>
  );
}

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

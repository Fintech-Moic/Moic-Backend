import CardBenefitList from '../molecules/CardBenefitList';
import CardTitleGroup from '../molecules/CardTitleGroup';
import { getCardDetail } from '@/api/card';

interface CardDetail {
  company?: string;
  type: string;
  name?: string;
  cardImage?: string;
  cardBenefit: Array<CardBenefit>;
}

interface CardBenefit {
  category: string;
  shopName: string;
  content: string;
  discount: string;
  point: string;
  cashBack: string;
}

export default async function CardDetailContainer({
  cardName,
}: {
  cardName: string;
}) {
  const cardDetail: CardDetail = (await getCardDetail(cardName)).data;

  return (
    <div className="shadow-md h-full flex flex-col justify-start items-center gap-16 rounded-3xl bg-white px-9 py-12">
      <img
        src={cardDetail?.cardImage}
        alt="카드상세이미지"
        className="w-[268px] h-40"
      />
      <div className="flex flex-col items-center gap-7">
        <CardTitleGroup
          mainTitle={{ size: 'h1b', value: cardDetail?.company as string }}
          subTitle={{ size: 'h4r', value: cardDetail?.name as string }}
        />
        <div className="flex flex-col justify-start item-start gap-6">
          <div className="w-24 h-9 bg-g6 text-white rounded-md flex items-center justify-center h3b">
            혜택
          </div>
          <CardBenefitList
            cardBenefit={cardDetail?.cardBenefit as Array<CardBenefit>}
          />
        </div>
      </div>
    </div>
  );
}

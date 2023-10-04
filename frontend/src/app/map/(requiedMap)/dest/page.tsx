/* Card Carousel */

import CardCarousel from '@/components/atoms/CardCarousel';
import { getMyCard } from '@/api/card';

interface DetailCardData {
  cardImage: string;
  company: string;
  id: string;
  name: string;
  type: string;
}

interface CardData {
  [x: string]: any;
  data: DetailCardData[];
}

export default async function Page() {
  const MyCardInfo = await getMyCard();
  const data: CardData = MyCardInfo.data.cardList;

  return <CardCarousel data={data} />;
}

/* Card Carousel */
import CardCarousel from '@/components/atoms/CardCarousel'
import { getMyCard } from '@/api/card';

export default async function Page() {
  const MyCardInfo = await getMyCard();

  interface DetailCardData {
    cardImage: string;
    company: string;
    id: string;
    name: string;
    type: string;
  }

  interface CardData {
    [x: string]: any;
    data: DetailCardData[]
  }

  const data : CardData = MyCardInfo.data.cardList

  return (
    <>
    <CardCarousel data={data} className="z-50"/>
    </>
  )
}

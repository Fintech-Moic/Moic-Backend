import CardCarousel from '@/components/atoms/CardCarousel'
import { getMyCard } from '@/api/card';

export default async function Page() {
  const MyCardInfo = await getMyCard();
  const data : (string | number)[] = MyCardInfo.data.cardList

  return (
    <>
    <div className="t1">place</div>
    <CardCarousel data={data} />
    </>
  )
}
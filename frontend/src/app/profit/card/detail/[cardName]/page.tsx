import CardDetailContainer from '@/app/profit/organisms/CardDetailContainer';

export default function Page({ params }: { params: { cardName: string } }) {
  return (
    <div className="w-full h-full relative px-5 py-9">
      <CardDetailContainer {...params} />
    </div>
  );
}

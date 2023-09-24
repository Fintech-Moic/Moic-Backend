'use client';

import { useParams } from 'next/navigation';
import CardDetailContainer from '@/app/profit/organisms/CardDetailContainer';

export default function Page() {
  const params = useParams();
  return (
    <div className="w-full h-full relative px-5 py-9">
      <CardDetailContainer cardName={params.cardName as string} />
    </div>
  );
}

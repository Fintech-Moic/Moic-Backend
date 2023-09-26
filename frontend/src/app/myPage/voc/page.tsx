import VocContainer from '../organisms/VocContainer';
import Header from '@/components/molecules/Header';
import Navbar from '@/components/molecules/Navbar';

export default function VocPage() {
  return (
    <>
      <Header title="전체 카드 조회" isFilterButton isPrevButton />
      <div className="relative flex-1 overflow-y-auto flex flex-col items-center w-full">
        <VocContainer />
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </>
  );
}

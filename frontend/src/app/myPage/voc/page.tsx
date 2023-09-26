import TextArea from '../atoms/TextArea';
import Header from '@/components/molecules/Header';
import Navbar from '@/components/molecules/Navbar';

export default function VOCPage() {
  return (
    <>
      <Header title="전체 카드 조회" isFilterButton isPrevButton />
      <div className="relative flex-1 overflow-y-auto">
        <TextArea />
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </>
  );
}

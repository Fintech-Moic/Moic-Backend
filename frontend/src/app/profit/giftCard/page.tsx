import MyGiftCardContainer from '../organisms/MyGiftCardContainer';
import Header from '@/components/molecules/Header';
import Navbar from '@/components/molecules/Navbar';

export default async function Page() {
  return (
    <>
      <Header title="내 기프티콘 조회" isFilterButton={false} isPrevButton />
      <div className="w-full h-full relative flex justify-center items-center flex-col">
        <MyGiftCardContainer />
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </>
  );
}

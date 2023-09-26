import GifticonRegist from '../../templates/GifticonRegist';
import Header from '@/components/molecules/Header';
import Navbar from '@/components/molecules/Navbar';

export default function Page() {
  return (
    <>
      <Header title="기프티콘 등록" isPrevButton isFilterButton={false} />
      <div className="relative px-5 py-9 flex-1 overflow-y-auto">
        <div className="shadow-md h-full flex flex-col justify-between items-center gap-16 rounded-3xl bg-white px-9 py-12">
          <GifticonRegist />
        </div>
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </>
  );
}

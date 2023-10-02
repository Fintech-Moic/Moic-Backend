import PaginatedBookmarkList from '../organisms/PaginatedBookmarkList';
import Header from '@/components/molecules/Header';
import Navbar from '@/components/molecules/Navbar';

export default function page() {
  return (
    <>
      <Header title="북마크 관리" isFilterButton={false} isPrevButton />
      <div className="relative flex-1 overflow-y-auto flex flex-col items-center w-full">
        <PaginatedBookmarkList usePage="myPage" />
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </>
  );
}

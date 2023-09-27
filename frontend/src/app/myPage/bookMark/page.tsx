import BookmarkContainer from '../organisms/BookmarkContainer';
import Header from '@/components/molecules/Header';
import Navbar from '@/components/molecules/Navbar';

/*
			{
			"category" : "커피전문점",
			"shopName" : "스타벅스",
			"shopLocation" : "역삼점",
			"address" : "도로명 주소",
			"latitude" : "",
			"longitude" : "",
				},
*/
export default function page() {
  return (
    <>
      <Header title="전체 카드 조회" isFilterButton isPrevButton />
      <div className="relative flex-1 overflow-y-auto flex flex-col items-center w-full">
        <BookmarkContainer />
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </>
  );
}

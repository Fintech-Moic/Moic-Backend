'use client';

/** 헤더 버튼 클릭 시, 나타나는 필터 내 검색을 위한 input
 * @returns {JSX.Element} 컴포넌트 반환
 */
export default function SearchInput() {
  return (
    <input
      type="text"
      name="search"
      className="p2r w-full h-12 border-Secondary rounded-[10px] border-2 pr-8 pl-2 focus:outline-none"
    />
  );
}

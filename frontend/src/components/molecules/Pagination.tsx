import IconButton from '../atoms/IconButton';
import PaginationLeftIcon from '@/../public/assets/PaginationLeftIcon.svg';
import PaginationRightIcon from '@/../public/assets/PaginationRightIcon.svg';

interface PaginationProps {
  idx: number;
  setIdx: React.Dispatch<React.SetStateAction<number>>;
  pageLength: number;
}

/** Pagination Component
 * @param {Number} idx 현재 페이지 위치값을 저장하는 상태 ( 현재 Array's Idx 기준 )
 * @param {React.Dispatch<React.SetStateAction<number>>} setIdx 상태 idx를 변경하는 함수
 * @param {Number} pageLength 총 페이지 ( Array.length 기준 )
 * @returns {JSX.Element} Pagination Component 반환
 */

export default function Pagination({
  idx,
  setIdx,
  pageLength,
}: PaginationProps) {
  // 사용자의 눈에 보이는 실 페이지 순서
  const pageIdx = idx + 1;
  const handleClickPrevIdx = () => {
    if (idx === 0 || pageLength === 0) return;
    setIdx((prev) => prev - 1);
  };

  const handleClickNextIdx = () => {
    if (idx === pageLength - 1 || pageLength === 0) return;
    setIdx((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <IconButton
        src={PaginationLeftIcon}
        alt="prevIdxButton"
        type="button"
        width="w-5"
        height="h-5"
        onClick={handleClickPrevIdx}
      />
      <button type="button" className="w-10 p2r" onClick={handleClickPrevIdx}>
        {pageIdx === 1 || pageLength === 0 ? ' ' : pageIdx - 1}
      </button>
      <button type="button" className="w-10 h2b text-y4">
        {pageIdx}
      </button>
      <button type="button" className="w-10 p2r" onClick={handleClickNextIdx}>
        {pageIdx === pageLength || pageLength === 0 ? ' ' : pageIdx + 1}
      </button>
      <IconButton
        src={PaginationRightIcon}
        alt="nextIdxButton"
        type="button"
        width="w-5"
        height="h-5"
        onClick={handleClickNextIdx}
      />
    </div>
  );
}

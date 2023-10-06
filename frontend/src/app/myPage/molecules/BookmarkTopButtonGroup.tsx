'use client';

import FillButton from '@/components/atoms/FillButton';
import OutlineButton from '@/components/atoms/OutlineButton';

interface BookmarkButtonGroupProps {
  listType: string;
  setListType: React.Dispatch<React.SetStateAction<string>>;
  isEmptyBookmark: boolean;
  onClickTotalSelect: React.MouseEventHandler<HTMLButtonElement>;
  onClickDelete: React.MouseEventHandler<HTMLButtonElement>;
}

/** 북마크 페이지에서, 한 줄로 나열된 버튼을 모아둔 컴포넌트
 * @param {String} listType 현재 북마크의 타입 (일반 읽기, 수정)
 * @param {React.Dispatch<React.SetStateAction<string>>} setListType 북마크의 타입 상태를 수정하는 함수
 * @param {boolean} isEmptyBookmark 사용자 계정의 북마크가 하나도 없는지 보여주는 조건값
 * @param {React.MouseEventHandler<HTMLButtonElement>} onClickTotalSelect 전체 선택 버튼 클릭 시, 동작하는 함수
 * @param {React.MouseEventHandler<HTMLButtonElement>} onClickDelete 삭제 버튼 클릭 시, 동작하는 함수
 * @returns {JSX.Element} 컴포넌트 반환
 */
export default function BookmarkTopButtonGroup({
  listType,
  setListType,
  isEmptyBookmark,
  onClickTotalSelect,
  onClickDelete,
}: BookmarkButtonGroupProps) {
  const handleClickModifyButton = () => {
    setListType('modify');
  };
  const handleClickViewButton = () => {
    setListType('read');
  };
  return listType === 'read' ? (
    <div className="w-full flex justify-end items-center">
      <OutlineButton
        lineColor="border-g4"
        textColor="text-g4"
        font="p1r"
        title="수정하기"
        width="w-20"
        height="h-8"
        borderRadius="rounded-md"
        disabled={isEmptyBookmark}
        onClick={handleClickModifyButton}
      />
    </div>
  ) : (
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-center items-center gap-3">
        <OutlineButton
          lineColor="border-g4"
          textColor="text-g4"
          font="p1r"
          title="전체선택"
          width="w-20"
          height="h-8"
          borderRadius="rounded-md"
          onClick={onClickTotalSelect}
        />
        <OutlineButton
          lineColor="border-Warning"
          textColor="text-Warning"
          font="p1r"
          title="삭제"
          width="w-20"
          height="h-8"
          borderRadius="rounded-md"
          onClick={onClickDelete}
        />
      </div>
      <FillButton
        bgColor="bg-g4"
        font="p1r"
        title="조회하기"
        width="w-20"
        height="h-8"
        borderRadius="rounded-md"
        onClick={handleClickViewButton}
      />
    </div>
  );
}

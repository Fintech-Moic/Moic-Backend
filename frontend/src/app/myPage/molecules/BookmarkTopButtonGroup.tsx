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

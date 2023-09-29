'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useAtom } from 'jotai';
import NumberProgress from '../atoms/NumberProgress';
import ProfitGiftCarousel from '../molecules/ProfitGiftCarousel';
import GiftCardEmptyRegistButton from '../atoms/GiftCardEmptyRegistButton';
import { getMyGift, postGiftDelete } from '@/api/giftCard';
import Modal from '@/components/atoms/Modal';
import TitleSentence from '@/components/atoms/TitleSentence';
import { giftDeleteModalAtom } from '@/store/atoms/modal';
import BothButtonGroup from '@/components/molecules/BothButtonGroup';

export default function MyGiftCardContainer() {
  const { data: giftData, isLoading } = useQuery({
    queryKey: ['getMyGift'],
    queryFn: () => getMyGift(),
  });
  const giftDeletMutation = useMutation({
    mutationFn: (imageUrl: string) => postGiftDelete(imageUrl),
  });
  const [currentGiftProgress, setCurrentGiftProgress] = useState(1);
  const [{ isOpen, deleteGiftInfo }, setOpenGiftDeleteModal] =
    useAtom(giftDeleteModalAtom);

  if (isLoading) return <div>로딩중...</div>;
  const giftList = giftData.data;

  const handleClickPrev = () => {
    if (currentGiftProgress === 1) return;
    setCurrentGiftProgress((prev) => prev - 1);
  };

  const handleClickNext = () => {
    if (currentGiftProgress === giftList.length) return;
    setCurrentGiftProgress((prev) => prev + 1);
  };

  const handleClickModalClose = () => {
    setOpenGiftDeleteModal((prev) => ({
      ...prev,
      isOpen: false,
      deleteCardInfo: {},
    }));
  };

  const handleClickCardDelete = () => {
    giftDeletMutation.mutate(deleteGiftInfo.imageUrl, {
      onSuccess: (data) => {
        if (
          data &&
          !Object.keys(data).includes('errorCode') &&
          !Object.keys(data).includes('status')
        ) {
          setOpenGiftDeleteModal((prev) => ({
            ...prev,
            isOpen: false,
            deleteCardInfo: {},
          }));
        }
        alert('기프티콘 삭제 실패! 다시, 시도해주세요');
      },
      onError() {
        setOpenGiftDeleteModal((prev) => ({
          ...prev,
          isOpen: false,
          deleteCardInfo: {},
        }));
        alert('기프티콘 삭제 실패! 다시, 시도해주세요');
      },
    });
  };
  return giftList.length === 0 ? (
    <GiftCardEmptyRegistButton />
  ) : (
    <div className="flex justify-center items-center flex-col gap-5">
      {isOpen && deleteGiftInfo.dueDate && deleteGiftInfo.imageUrl && (
        <Modal>
          <div className="flex flex-col gap-16 justify-center items-center w-full h-full">
            <TitleSentence title="" sentence="이 기프티콘을 삭제하실 건가요?" />
            <div className="flex flex-col justify-center items-center gap-4">
              <img
                src={deleteGiftInfo.imageUrl}
                alt="삭제기프티콘이미지"
                className="w-40 h-60"
              />
            </div>
            <BothButtonGroup
              leftTitle="뒤로가기"
              rightTitle="삭제하기"
              onClickLeft={handleClickModalClose}
              onClickRight={handleClickCardDelete}
            />
          </div>
        </Modal>
      )}
      <NumberProgress
        startTitle="기프티콘 등록이 가능합니다!"
        maxLength={giftList.length}
        currentProgress={currentGiftProgress}
      />
      <ProfitGiftCarousel
        data={giftList}
        canDelete
        onClickNext={handleClickNext}
        onClickPrev={handleClickPrev}
      />
    </div>
  );
}

'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useAtom } from 'jotai';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import NumberProgress from '../atoms/NumberProgress';
import ProfitGiftCarousel from '../molecules/ProfitGiftCarousel';
import GiftCardEmptyRegistButton from '../atoms/GiftCardEmptyRegistButton';
import { getMyGift, postGiftDelete } from '@/api/giftCard';
import Modal from '@/components/atoms/Modal';
import TitleSentence from '@/components/atoms/TitleSentence';
import { giftDeleteModalAtom } from '@/store/atoms/modal';
import BothButtonGroup from '@/components/molecules/BothButtonGroup';
import useCustomQuery from '@/hooks/useCustomQuery';

/** 내 기프티콘 조회 페이지에서, 현재 순서, 캐러셀 또는 빈 기프티콘 페이지임을 보여주는 organisms 컴포넌트
 * @returns {JSX.Element} 컴포넌트 반환
 */

export default function MyGiftCardContainer() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [currentGiftProgress, setCurrentGiftProgress] = useState(1);
  const [{ isOpen, deleteGiftInfo }, setOpenGiftDeleteModal] =
    useAtom(giftDeleteModalAtom);
  const { data: giftData, isLoading } = useCustomQuery(
    {
      queryKey: ['getMyGift'],
      queryFn: () => getMyGift(),
      staleTime: 1000 * 60 * 100,
      refetchOnWindowFocus: false,
    },
    router
  );
  const giftDeletMutation = useMutation({
    mutationFn: (imageUrl: string) => postGiftDelete(imageUrl),
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
        queryClient.invalidateQueries(['getMyGift']);

        return;
      }
      Swal.fire({
        icon: 'error',
        title: '기프티콘 삭제 실패',
        text: '삭제에 실패했습니다. 다시 시도해주세요!',
      });
    },
    onError() {
      setOpenGiftDeleteModal((prev) => ({
        ...prev,
        isOpen: false,
        deleteCardInfo: {},
      }));
      Swal.fire({
        icon: 'error',
        title: '기프티콘 삭제 실패',
        text: '삭제에 실패했습니다. 다시 시도해주세요!',
      });
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center flex-col gap-5">
        <div className="w-8 h-5 bg-Skeleton rounded-lg" />
        <div className="w-80 h-32 bg-Skeleton rounded-lg" />
      </div>
    );
  }

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
    if (deleteGiftInfo && deleteGiftInfo.imageUrl) {
      giftDeletMutation.mutate(deleteGiftInfo.imageUrl);
    }
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
              <Image
                width={160}
                height={240}
                src={deleteGiftInfo.imageUrl}
                alt="삭제기프티콘이미지"
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
        maxLength={giftList.length - 1}
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

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import GiftCardRegistTitle from '../atoms/GiftCardRegistTitle';
import FillButton from '@/components/atoms/FillButton';
import { postGiftRegist } from '@/api/giftCard';

/** 기프티콘 이미지를 통한 등록을 지원하는 컴포넌트
 * @returns {JSX.Element} 컴포넌트 반환
 */
export default function GiftCardRegist() {
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadThumbnail, setUploadThumbnail] = useState<string | null>(null);
  const router = useRouter();

  const hasUploaded = () => {
    if (uploadFile && uploadThumbnail) return true;
    return false;
  };

  const onChangeUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeElement = e.target as HTMLInputElement;
    const currentUploadImages = changeElement.files;
    if (!currentUploadImages) return;
    setUploadThumbnail(window.URL.createObjectURL(currentUploadImages[0]));
    setUploadFile(currentUploadImages[0]);
  };

  const mutation = useMutation({
    mutationFn: (formData: any) => postGiftRegist(formData),
    onSuccess: (data) => {
      if (
        data &&
        !Object.keys(data).includes('errorCode') &&
        !Object.keys(data).includes('status')
      ) {
        Swal.fire({
          icon: 'error',
          title: '기프티콘 등록 실패',
          text: '등록에 실패했습니다. 다시 시도해주세요!',
        });
        return;
      }
      router.back();
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        title: '기프티콘 등록 실패',
        text: '등록에 실패했습니다. 다시 시도해주세요!',
      });
    },
  });

  const handleClickRegist = async () => {
    if (
      !uploadFile ||
      !uploadThumbnail ||
      !uploadFile.type.startsWith('image/')
    )
      return;
    const formData = new FormData();
    formData.append('file', uploadFile);
    mutation.mutate(formData);
  };

  return (
    <>
      <GiftCardRegistTitle
        isTrue={hasUploaded()}
        trueText="기프티콘 업로드에 성공했습니다."
        falseText="기프티콘을 업로드해주세요."
      />
      <label
        htmlFor="gifticonUploadFile"
        className="flex justify-center items-center flex-col cursor-pointer"
      >
        {hasUploaded() ? (
          <Image
            src={uploadThumbnail as string}
            width={100}
            height={200}
            alt="기프티콘썸네일"
          />
        ) : (
          <Image
            src="/assets/BlackFileUploadIcon.svg"
            alt="파일업로드"
            width={104}
            height={104}
            className="opacity-50"
          />
        )}
      </label>
      <input
        type="file"
        name="gifticonUploadFile"
        id="gifticonUploadFile"
        className="hidden"
        onChange={onChangeUploadFile}
        accept="image/*"
      />

      <FillButton
        type="button"
        bgColor="bg-g4"
        title="기프티콘 등록하기"
        width="w-80"
        height="h-12"
        disabled={!hasUploaded()}
        onClick={handleClickRegist}
      />
    </>
  );
}

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import FillButton from '@/components/atoms/FillButton';
import postGifticonRegist from '@/api/gifticon';

export default function GifticonRegistImage({
  setIdx,
  setGifticonResponse,
}: {
  setIdx: React.Dispatch<React.SetStateAction<number>>;
  setGifticonResponse: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadThumbnail, setUploadThumbnail] = useState<string | null>(null);
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
    mutationFn: (formData: any) => postGifticonRegist(formData),
    onSuccess: (data) => {
      switch (data.type) {
        case 200:
          setGifticonResponse(data.data);
          setIdx((prev) => prev + 1);
          break;
        default:
          alert('실패했습니다! 다시 시도해주세요!');
          break;
      }
    },
    onError: () => {
      alert('실패했습니다! 다시 시도해주세요!');
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
      <h2
        className={`${
          hasUploaded() ? '' : 'opacity-50'
        } h3b break-words text-center`}
      >
        {hasUploaded()
          ? '기프티콘 업로드에 성공했습니다.'
          : '기프티콘을 업로드해주세요.'}
      </h2>

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

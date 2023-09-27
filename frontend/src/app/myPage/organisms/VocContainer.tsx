'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import TextArea from '../atoms/TextArea';
import BothButtonGroup from '@/components/molecules/BothButtonGroup';
import TitleSentence from '@/components/atoms/TitleSentence';
import postVocSuggest from '@/api/myPage';

/** Voc 페이지의 코어를 구성하는 organisms 계층 컴포넌트
 * @returns {JSX.Element} 컴포넌트 반환
 */
export default function VocContainer() {
  const router = useRouter();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const mutation = useMutation({
    mutationFn: (suggestedText: string) => postVocSuggest(suggestedText),
  });
  const handleClickPrev = useCallback(() => {
    router.back();
  }, [router]);

  const handleClickSuggest = useCallback(() => {
    if (!textAreaRef.current) return;
    const textAreaEl = textAreaRef.current as HTMLTextAreaElement;
    const suggestedText = textAreaEl.value;
    if (suggestedText.length === 0) {
      alert('문의사항을 입력 후, 제출해주세요!');
      return;
    }
    mutation.mutate(suggestedText);
    alert('서버로 제출되었습니다!');
    router.back();
  }, [mutation, router]);

  return (
    <div className="flex flex-col items-center pb-6 justify-start gap-8 pt-14 max-w-xs">
      <TitleSentence title="문의사항 건의" sentence="" />
      <TextArea
        ref={textAreaRef}
        placeholder="모익을 사용하셨을 때, 느꼈던 불편한 점, 개선할 점, 관리자에게 문의할 점을 편하게 적어주세요.(최대 500자)"
        maxLength={500}
      />
      <BothButtonGroup
        leftTitle="뒤로가기"
        rightTitle="건의하기"
        onClickLeft={handleClickPrev}
        onClickRight={handleClickSuggest}
      />
    </div>
  );
}

interface GiftCardRegistTitleProps {
  isTrue: boolean;
  trueText: string;
  falseText: string;
}

/** 기프티콘 등록 페이지에서, 상단 타이틀을 보여주는 컴포넌트
 * @param {Boolean} isTrue 성공, 실패 텍스트를 보여주는 기준인 조건
 * @param {String} trueText 성공 시 보여주는 텍스트
 * @param {String} falseText 실패 시 보여주는 텍스트
 * @returns {JSX.Element} 컴포넌트 반환
 */
export default function GiftCardRegistTitle({
  isTrue,
  trueText,
  falseText,
}: GiftCardRegistTitleProps) {
  return (
    <h2 className={`${isTrue ? '' : 'opacity-50'} h3b break-words text-center`}>
      {isTrue ? trueText : falseText}
    </h2>
  );
}

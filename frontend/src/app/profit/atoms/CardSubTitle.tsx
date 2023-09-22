interface CardMainTitleProps {
  value: string;
  size: string;
}

/** 카드 타이틀 그룹 내 서브 타이틀 컴포넌트
 * @param {String} value 보여줄 텍스트
 * @param {String} size 텍스트의 크기
 * @returns {JSX.Element} 컴포넌트 반환
 */
export default function CardSubTitle({ value, size }: CardMainTitleProps) {
  return <span className={`${size} text-CardSubtitle`}>{value}</span>;
}

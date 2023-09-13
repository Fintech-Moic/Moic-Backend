/*
테두리와 흰색 바탕색이 존재하는 버튼

모바일 기준 사이징
height : 32px, 48px
weight : 80px, 120px, 320px
*/

interface OutlineButtonProps {
  bgColor: string;
  lineColor: string;
  title: string;
}
export default function OutlineButton({
  bgColor,
  lineColor,
  title,
}: OutlineButtonProps) {
  return (
    <button type="button" className={`bg-${bgColor} border-${lineColor}`}>
      {title}
    </button>
  );
}

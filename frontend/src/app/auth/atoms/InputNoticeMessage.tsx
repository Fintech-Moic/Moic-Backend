type InputErrorMessageProps = {
  children: string;
  isError: boolean;
};

/**
 * @param {String} children InputNoticeMessage에서 출력될 메시지
 * @param {Boolean} isError InputNoticeMessage앞에 X표 여부
 * @returns {JSX.Element} InputNoticeMessage Component 반환
 */

export default function InputNoticeMessage({
  children,
  isError,
}: InputErrorMessageProps) {
  return (
    <div>
      <p>{children}</p>
      <p>{isError ? 'x' : 'check'}</p>
    </div>
  );
}

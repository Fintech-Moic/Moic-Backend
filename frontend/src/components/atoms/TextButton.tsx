interface TextButtonProps {
  children: string;
  onClick: () => void;
  font?: string;
  textColor?: string;
}

/** TextButton Component
 * @param {String} children 버튼에 들어갈 text
 * @param {() => void} onClick Callback 함수
 * @param {String} font text font
 * @param {String} textColor text color
 * @returns {JSX.Element} TextButton Component 반환
 */

export default function TextButton({
  children,
  onClick,
  font = 'captionr',
  textColor = 'text-Primary',
}: TextButtonProps) {
  return (
    <button type="button" onClick={onClick} className={`${font} ${textColor}`}>
      {children}
    </button>
  );
}

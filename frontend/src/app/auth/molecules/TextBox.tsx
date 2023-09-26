interface TextBoxProps {
  width: string;
  height: string;
  children: JSX.Element;
}

/**
 * @param {String} width TextBox 너비
 * @param {String} height TextBox 높이
 * @param {JSX.Element} children TextBox 내용
 * @returns {JSX.Element} TextBox Component return
 */

export default function TextBox({ width, height, children }: TextBoxProps) {
  return (
    <article className={`${width} ${height} border-2 border-Secondary`}>
      {children}
    </article>
  );
}

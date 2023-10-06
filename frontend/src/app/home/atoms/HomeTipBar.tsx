interface HomeTipBarProps {
  width: string;
  height: string;
  children: string;
}

/**
 * @param {String} width 너비
 * @param {String} height 높이
 * @param {String} children 출력될 Tip 내용
 * @returns {JSX.Element} HomeTipBar Component
 */

export default function HomeTipBar({
  width,
  height,
  children,
}: HomeTipBarProps) {
  return (
    <section
      className={`${width} ${height} flex items-center bg-g2 rounded-[10px] px-2`}
    >
      <p className="p2r">{children}</p>
    </section>
  );
}

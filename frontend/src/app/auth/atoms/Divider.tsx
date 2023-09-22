interface DividerProps {
  width: string;
}

/** Divider Components
 * @param {String} width divider의 너비
 * @returns {JSX.Element} Divider Component 반환
 */
export default function Divider({ width }: DividerProps) {
  return <div className={`${width} border-2 border-solid border-black}`} />;
}

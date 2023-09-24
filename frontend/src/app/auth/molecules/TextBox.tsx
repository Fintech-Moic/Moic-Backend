interface TextBoxProps {
  width: string;
  height: string;
  children: JSX.Element;
}

export default function TextBox({ width, height, children }: TextBoxProps) {
  return (
    <article className={`${width} ${height} border-2 border-Secondary`}>
      {children}
    </article>
  );
}

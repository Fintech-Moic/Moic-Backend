interface HomeTipBarProps {
  width: string;
  height: string;
  children: JSX.Element;
}

export default function HomeTipBar({
  width,
  height,
  children,
}: HomeTipBarProps) {
  return (
    <section className={`${width} ${height} bg-g2`}>
      <p className="p2r">{children}</p>
    </section>
  );
}

interface HomeTipBarProps {
  width: string;
  height: string;
  children: string;
}

export default function HomeTipBar({
  width,
  height,
  children,
}: HomeTipBarProps) {
  return (
    <section
      className={`${width} ${height} flex items-center bg-g2 rounded-[10px]`}
    >
      <p className="p2r">{children}</p>
    </section>
  );
}

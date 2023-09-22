interface CardMainTitleProps {
  value: string;
  size: string;
}

export default function CardSubTitle({ value, size }: CardMainTitleProps) {
  return <span className={`${size} text-CardSubtitle`}>{value}</span>;
}

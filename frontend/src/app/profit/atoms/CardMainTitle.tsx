interface CardMainTitleProps {
  value: string;
  size: string;
}

export default function CardMainTitle({ value, size }: CardMainTitleProps) {
  return <h2 className={`${size}`}>{value}</h2>;
}

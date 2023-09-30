interface HomeNameProps {
  children: JSX.Element;
}

export default function HomeName({ children }: HomeNameProps) {
  return <p className="p2r">{children}</p>;
}

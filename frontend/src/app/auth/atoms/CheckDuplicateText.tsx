interface CheckDuplicateTextProps {
  children: string;
}

export default function CheckDuplicateText({
  children,
}: CheckDuplicateTextProps) {
  return <p className="captionr text-Warning px-2">{children}</p>;
}

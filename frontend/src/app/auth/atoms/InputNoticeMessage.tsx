type InputErrorMessageProps = {
  children: string;
  isError: boolean;
};

export default function InputNoticeMessage({
  children,
  isError,
}: InputErrorMessageProps) {
  return (
    <div>
      <p>{children}</p>
      <p>{isError ? 'x' : 'check'}</p>
    </div>
  );
}

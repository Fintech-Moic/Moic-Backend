import TextBox from '../atoms/TextBox';

interface SignUpTextFormProps {
  children: JSX.Element;
}

/**
 * @param {JSX.Element} children 출력될 children props
 * @returns {JSX.Element} SignUpTextForm Component
 */

export default function SignUpTextForm({ children }: SignUpTextFormProps) {
  return (
    <div>
      <TextBox width="w-80" height="h-80">
        {children}
      </TextBox>
    </div>
  );
}

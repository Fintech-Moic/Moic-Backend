import React from 'react';

interface InputValidationBoxProps {
  name: string;
  placeholder: string;
  type: string;
}

function InputValidationBox(
  { name, placeholder, type }: InputValidationBoxProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return <input name={name} placeholder={placeholder} type={type} ref={ref} />;
}

export default React.forwardRef<HTMLInputElement, InputValidationBoxProps>(
  InputValidationBox
);

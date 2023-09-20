'use client';

import { UseFormRegister, FieldValues } from 'react-hook-form';

type InputBoxProps = {
  register: UseFormRegister<FieldValues>;
  name: string;
  type: string;
  placeholder: string;
  notice?: string;
  pattern?: RegExp;
};

/** InputBox Component
 * @param {UseFormRegister<FieldValues>} register useHookorm의 register
 * @param {String} name input data name
 * @param {String} type input type
 * @param {String} placeholder InputBox placeholder
 * @param {String} notice 하단에 띄울 문구
 * @param {RegExp} pattern 유효성 검사용 pattern
 * @returns {JSX.Element} InputValidationBox Component 반환
 */

export default function InputBox({
  register,
  name,
  type,
  placeholder,
  notice,
  pattern,
}: InputBoxProps) {
  return (
    <div className="flex flex-col">
      <input
        {...register(name, {
          pattern,
        })}
        type={type}
        placeholder={placeholder}
        className="input"
      />
      {notice && <p>{notice}</p>}
    </div>
  );
}

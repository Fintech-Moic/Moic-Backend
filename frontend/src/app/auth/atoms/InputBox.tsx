import { forwardRef, ForwardedRef } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

type InputBoxProps = {
  register: UseFormRegister<FieldValues>;
  width: string;
  height: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
};

/** InputBox Component
 * @param {ForwardedRef<HTMLInputElement>} ref
 * @param {String} width
 * @param {String} height
 * @param {String} id InputBox Id
 * @param {String} name InputBox 이름
 * @param {String} type InputBox type
 * @param {String} placeholder InputBox placeholder
 * @returns {JSX.Element} InputBox Component 반환
 */

const InputBox = forwardRef(
  (
    { width, height, register, id, name, type, placeholder }: InputBoxProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        className={`${width} ${height} border-solid border-2 rounded-[10px] px-2`}
        {...register(name)}
        id={id}
        ref={ref}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    );
  }
);

export default InputBox;

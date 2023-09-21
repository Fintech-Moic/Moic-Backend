import { forwardRef, ForwardedRef } from 'react';

type InputBoxProps = {
  name: string;
  type: string;
  placeholder: string;
};

/** InputBox Component
 * @param {ForwardedRef<HTMLInputElement>} ref
 * @param {String} name input data name
 * @param {String} type input type
 * @param {String} placeholder InputBox placeholder
 * @returns {JSX.Element} InputBox Component 반환
 */

const InputBox = forwardRef(
  (
    { name, type, placeholder }: InputBoxProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input ref={ref} name={name} type={type} placeholder={placeholder} />
    );
  }
);

export default InputBox;

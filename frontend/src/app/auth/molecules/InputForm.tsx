import { UseFormRegister, FieldValues } from 'react-hook-form';
import InputBox from '../atoms/InputBox';
import InputNoticeMessage from '../atoms/InputNoticeMessage';

type InputFormProps = {
  register: UseFormRegister<FieldValues>;
  name: string;
  type: string;
  placeholder: string;
  isError: boolean;
  notice?: string;
};

/** InputForm Component
 * @param {String} register react-form-hook의 register
 * @param {String} name InputBox 이름
 * @param {String} type InputBox type
 * @param {String} placeholder InputBox placeholder
 * @param {Boolean} isError inputBox에 error여부 보내줄 props
 * @param {String} notice inputBox 아래에 출력할 메시지
 * @returns {JSX.Element} InputBox와 Error 출력 메시지를 가진 InputForm Component 반환
 */

export default function InputForm({
  register,
  name,
  type,
  notice,
  isError,
  placeholder,
}: InputFormProps) {
  return (
    <>
      <InputBox
        {...register(name)}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {notice && (
        <InputNoticeMessage isError={isError}>{notice}</InputNoticeMessage>
      )}
    </>
  );
}

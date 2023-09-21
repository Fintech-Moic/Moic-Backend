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
 * @param {String} register Submit을 위한 FillButton의 Title
 * @param {String} name input data name
 * @param {String} type 로그인/아이디찾기/비밀번호 찾기 판별용
 * @param {String} placeholder
 * @param {Boolean} isError
 * @param {String} notice
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

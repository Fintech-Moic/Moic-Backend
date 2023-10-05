import { FieldValues, UseFormRegister } from 'react-hook-form';
import InputBox from '../atoms/InputBox';
import InputNoticeMessage from '../atoms/InputNoticeMessage';

type InputFormProps = {
  register: UseFormRegister<FieldValues>;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  isError: boolean;
  width: string;
  height: string;
  validation?: { value: RegExp; message: string };
  notice?: string;
};

/** InputForm Component
 * @param {UseFormRegister<FieldValues>} register react-form-hook의 register
 * @param {String} id InputBox id
 * @param {String} name InputBox 이름
 * @param {String} type InputBox type
 * @param {String} placeholder InputBox placeholder
 * @param {Boolean} isError InputNoticeMessage에 error여부 보내줄 props
 * @param {String} width inputBox 너비
 * @param {String} height inputBox 높이
 * @param {String} notice inputBox 아래에 출력할 메시지
 * @returns {JSX.Element} InputBox와 Error 출력 메시지를 가진 InputForm Component 반환
 */

export default function InputForm({
  register,
  validation,
  width,
  height,
  id,
  name,
  type,
  notice,
  isError,
  placeholder,
}: InputFormProps) {
  return (
    <div className={`${width} flex flex-col`}>
      <InputBox
        {...register(name, { pattern: validation })}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        register={register}
        width={width}
        height={height}
      />
      {notice && (
        <InputNoticeMessage isError={isError}>{notice}</InputNoticeMessage>
      )}
    </div>
  );
}

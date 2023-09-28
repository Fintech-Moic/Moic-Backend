import InputForm from '../molecules/InputForm';
import FillButton from '@/components/atoms/FillButton';
import { ReactHookFormType } from '@/types/auth';

interface FindIdFormProps extends ReactHookFormType {}

/** FindIdForm Component
 * @todo error 설정 및 타입 변경
 *
 * @returns {JSX.Element} 2개의 InputForm과 FillButton을 가진 FindIdForm
 */

export default function FindIdForm({
  register,
  errors,
  onSubmit,
}: FindIdFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col h-1/2 justify-between"
    >
      <div className="flex flex-col h-1/2 justify-evenly">
        <InputForm
          register={register}
          id="name"
          name="name"
          type="text"
          placeholder="이름"
          isError={Boolean(errors.name)}
          notice={errors.name?.message}
          width="w-80"
          height="h-12"
        />
        <InputForm
          register={register}
          id="email"
          name="email"
          type="text"
          placeholder="이메일"
          isError={Boolean(errors.email)}
          notice={errors.email?.message}
          width="w-80"
          height="h-12"
        />
      </div>
      <FillButton
        type="submit"
        title="아이디 찾기"
        font="h3b"
        width="w-80"
        height="h-12"
        bgColor="bg-g4"
      />
    </form>
  );
}

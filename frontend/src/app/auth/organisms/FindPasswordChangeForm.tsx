import InputForm from '../molecules/InputForm';
import FillButton from '@/components/atoms/FillButton';
import { ReactHookFormType } from '@/types/auth';

interface FindPasswordChangeFormProps extends ReactHookFormType {}

/** FindPasswordChangeForm Component
 * @todo error 설정 및 타입 변경
 *
 * @returns {JSX.Element} 2개의 InputForm과 FillButton을 가진 FindIdForm
 */

export default function FindPasswordChangeForm({
  register,
  errors,
  onSubmit,
}: FindPasswordChangeFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col h-1/2 justify-between"
    >
      <div className="flex flex-col h-1/2 justify-evenly">
        <InputForm
          register={register}
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호"
          isError={Boolean(errors.password)}
          notice={errors.password?.message}
          width="w-80"
          height="h-12"
        />
        <InputForm
          register={register}
          id="passwordCheck"
          name="passwordCheck"
          type="password"
          placeholder="비밀번호 확인"
          isError={Boolean(errors.password)}
          notice={errors.password?.message}
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

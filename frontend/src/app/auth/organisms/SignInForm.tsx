import InputForm from '../molecules/InputForm';
import FillButton from '@/components/atoms/FillButton';
import { ReactHookFormType } from '@/types/auth';

interface SignInFormProps extends ReactHookFormType {}
/** SignInForm Component
 * @returns {JSX.Element} 2개의 InputForm과 FillButton을 가진 SignInForm
 */

export default function SignInForm({
  register,
  errors,
  onSubmit,
}: SignInFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col h-1/3 justify-evenly"
    >
      <InputForm
        register={register}
        id="id"
        name="id"
        type="text"
        placeholder="아이디"
        isError={Boolean(errors.id)}
        notice={errors.id?.message}
        width="w-80"
        height="h-12"
      />
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
      <FillButton
        type="submit"
        title="로그인"
        font="h3b"
        width="w-80"
        height="h-12"
        bgColor="bg-g4"
        disabled={false}
      />
    </form>
  );
}

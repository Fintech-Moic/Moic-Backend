// import { UseFormRegister, FieldValues } from 'react-hook-form';
import InputForm from '../molecules/InputForm';
import FillButton from '@/components/atoms/FillButton';

interface SignInFormProps {
  register: any;
  errors: any;
  onSubmit: () => void;
}
/** InputForm Component
 * @param {String} register react-form-hook의 register
 * @param {String} errors errors
 * @param {String} onSubmit onSubmit callback
 * @returns {JSX.Element} 2개의 InputForm과 FillButton을 가진 SignInForm
 *
 * @todo register와 errors any 타입 변경
 */

export default function SignInForm({
  register,
  errors,
  onSubmit,
}: SignInFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <InputForm
        register={register('id')}
        name="id"
        type="text"
        placeholder="ID"
        isError={Boolean(errors.id)}
        notice={errors.id?.message}
      />

      <InputForm
        register={register('password')}
        name="password"
        type="password"
        placeholder="Password"
        isError={Boolean(errors.password)}
        notice={errors.password?.message}
      />
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

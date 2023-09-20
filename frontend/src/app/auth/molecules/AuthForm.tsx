'use client';

import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import InputBox from '../atoms/InputBox';
import FillButton from '@/components/atoms/FillButton';

type FormData = {
  email?: string;
  password?: string;
  username?: string;
  name?: string;
  gender?: string;
  age?: string;
};

/** AuthForm Component
 * @param {String} btntitle Submit을 위한 FillButton의 Title
 * @param {String} name input data name
 * @param {String} isSignUp 로그인/아이디찾기/비밀번호 찾기 판별용
 * @returns {JSX.Element} InputBox2개와 SubmitBtn을 가진 AuthForm Component 반환
 */

type AuthFormProps = {
  btntitle: string;
  onSubmit: SubmitHandler<FormData>;
  isSignUp?: boolean;
};
export default function AuthForm({
  btntitle,
  //   onSubmit,
  isSignUp = false,
}: AuthFormProps) {
  const { register, control } = useForm<FormData>();

  return (
    <form
      className="auth-form"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        // onsubmit(data);
      }}
    >
      {isSignUp === false && (
        <>
          <InputBox
            register={register}
            name="id"
            type="text"
            placeholder="아이디"
            pattern={/^[a-z0-9]{6,12}$/}
          />
          <InputBox
            register={register}
            name="password"
            type="password"
            placeholder="비밀번호"
            pattern={
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,16}$/
            }
          />
        </>
      )}
      {isSignUp && (
        <>
          <InputBox
            register={register}
            name="email"
            type="email"
            placeholder="E-mail"
            pattern={/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,4}$/}
          />
          <InputBox
            register={register}
            name="name"
            type="text"
            placeholder="Name"
            pattern={/^\S*$/}
          />
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            )}
          />
          <InputBox
            register={register}
            name="age"
            type="number"
            placeholder="Age"
          />
        </>
      )}
      <FillButton
        type="submit"
        bgColor="bg-g4"
        title={btntitle}
        font="h3b"
        width="w-80"
        height="h-12"
      />
    </form>
  );
}

import { forwardRef } from 'react';
import InputForm from '../molecules/InputForm';
import { SignUpFormProps } from '@/types/auth';

const SignUpAccountForm = forwardRef(
  (
    { register, errors, onSubmit }: SignUpFormProps,
    ref: React.Ref<HTMLFormElement>
  ) => {
    return (
      <form
        ref={ref}
        onSubmit={onSubmit}
        className="w-full h-4/5 flex flex-col justify-evenly"
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
      </form>
    );
  }
);

export default SignUpAccountForm;
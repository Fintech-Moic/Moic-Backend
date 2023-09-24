import { forwardRef } from 'react';
import InputForm from '../molecules/InputForm';
import { SignUpFormProps } from '@/types/auth';

const SignUpPersonalForm = forwardRef(
  (
    { register, errors, onSubmit }: SignUpFormProps,
    ref: React.Ref<HTMLFormElement>
  ) => {
    return (
      <form ref={ref} onSubmit={onSubmit}>
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
      </form>
    );
  }
);

export default SignUpPersonalForm;

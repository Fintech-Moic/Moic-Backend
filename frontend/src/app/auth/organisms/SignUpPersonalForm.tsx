import { forwardRef } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import InputForm from '../molecules/InputForm';

interface SignUpFormProps {
  register: UseFormRegister<FieldValues>;
  errors: any;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

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
          isError={Boolean(errors.id)}
          notice={errors.id?.message}
          width="w-80"
          height="h-12"
        />
        <InputForm
          register={register}
          id="email"
          name="email"
          type="text"
          placeholder="이메일"
          isError={Boolean(errors.id)}
          notice={errors.id?.message}
          width="w-80"
          height="h-12"
        />
      </form>
    );
  }
);

export default SignUpPersonalForm;

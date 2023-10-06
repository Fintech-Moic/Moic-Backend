import { forwardRef, useState, useEffect } from 'react';
import InputForm from '../molecules/InputForm';
import CheckDuplicateText from '../atoms/CheckDuplicateText';
import { ReactHookFormType } from '@/types/auth';
import { idPattern, passwordPattern } from '@/util/validation';
import { checkDuplicateId } from '@/api/auth';

interface SignUpAccountFormProps extends ReactHookFormType {}

/** SignUpAccountForm Components
 * @returns {JSX.Element} 회원가입시 계정 정보를 입력할 SignUpAccountForm
 */

const SignUpAccountForm = forwardRef(
  (
    { register, errors, onSubmit, watch }: SignUpAccountFormProps,
    ref: React.Ref<HTMLFormElement>
  ) => {
    const id = watch('id');
    const password = watch('password');
    const passwordCheck = watch('passwordCheck');
    const [idCheckMessage, setIdCheckMessage] = useState('');
    useEffect(() => {
      const delay = 500;
      const timerId = setTimeout(async () => {
        if (id) {
          const result = await checkDuplicateId(id);
          setIdCheckMessage(result.message);
        }
      }, delay);
      return () => clearTimeout(timerId);
    }, [id]);
    return (
      <form
        ref={ref}
        onSubmit={onSubmit}
        className="w-full h-4/5 flex flex-col justify-evenly"
      >
        <InputForm
          register={register}
          validation={idPattern}
          id="id"
          name="id"
          type="text"
          placeholder="아이디"
          isError={Boolean(errors.id)}
          notice="6자 이상 ~ 12자 이하, 영문(소문자), 숫자의 조합을 입력해주세요."
          width="w-80"
          height="h-12"
        />
        {id && idCheckMessage !== '' && (
          <CheckDuplicateText>{idCheckMessage}</CheckDuplicateText>
        )}
        <div className="flex flex-col h-1/2 justify-evenly">
          <InputForm
            register={register}
            validation={passwordPattern}
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
            isError={Boolean(errors.password)}
            notice="비밀번호는 8~16자의 영문(대/소문자), 숫자, 특수문자 조합입니다."
            width="w-80"
            height="h-12"
          />
          <InputForm
            register={register}
            validation={passwordPattern}
            id="passwordCheck"
            name="passwordCheck"
            type="password"
            placeholder="비밀번호 확인"
            isError={password !== passwordCheck || passwordCheck === ''}
            notice="비밀번호와 같은 값을 입력해주세요."
            width="w-80"
            height="h-12"
          />
        </div>
      </form>
    );
  }
);

export default SignUpAccountForm;

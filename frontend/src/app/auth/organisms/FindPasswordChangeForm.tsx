import Timer from '../atoms/Timer';
import InputForm from '../molecules/InputForm';
import FillButton from '@/components/atoms/FillButton';
import { ReactHookFormType } from '@/types/auth';
import { passwordPattern } from '@/util/validation';

interface FindPasswordChangeFormProps extends ReactHookFormType {
  timerKey: number;
}

/** FindPasswordChangeForm Component
 * @param {Number} timerKey Timer에 전달될 key
 * @returns {JSX.Element} 2개의 InputForm과 FillButton을 가진 FindPasswordChangeForm
 */

export default function FindPasswordChangeForm({
  register,
  errors,
  onSubmit,
  timerKey,
  watch,
}: FindPasswordChangeFormProps) {
  const password = watch('password');
  const passwordCheck = watch('passwordCheck');
  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col h-2/3 justify-between"
    >
      <div className="flex flex-col h-full justify-evenly">
        <div>
          <Timer key={timerKey} />
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
        </div>
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
      <FillButton
        type="submit"
        title="비밀번호 설정하기"
        font="h3b"
        width="w-80"
        height="h-12"
        bgColor="bg-g4"
      />
    </form>
  );
}

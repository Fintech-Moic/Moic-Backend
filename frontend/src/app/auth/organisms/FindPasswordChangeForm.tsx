import Timer from '../atoms/Timer';
import InputForm from '../molecules/InputForm';
import FillButton from '@/components/atoms/FillButton';
import { ReactHookFormType } from '@/types/auth';

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
}: FindPasswordChangeFormProps) {
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
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
            isError={Boolean(errors.password)}
            notice={errors.password?.message}
            width="w-80"
            height="h-12"
          />
        </div>
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
        title="비밀번호 설정하기"
        font="h3b"
        width="w-80"
        height="h-12"
        bgColor="bg-g4"
      />
    </form>
  );
}

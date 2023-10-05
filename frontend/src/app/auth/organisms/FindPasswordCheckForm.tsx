import InputForm from '../molecules/InputForm';
import Timer from '../atoms/Timer';
import FillButton from '@/components/atoms/FillButton';
import { ReactHookFormType } from '@/types/auth';

interface FindPasswordCheckFormProps extends ReactHookFormType {
  showToChangePassword: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  timerKey: number;
}

/**
 * @param {Boolean} showToChangePassword 이동 버튼 보여줄지 변수
 * @param {React.MouseEventHandler<HTMLButtonElement>} onClick 비밀번호 변경으로 이동시킬 callback 함수
 * @param {Number} timerKey Timer에 전달될 key
 * @returns {JSX.Element} FindPasswordCheckForm Component 반환
 */

export default function FindPasswordCheckForm({
  register,
  errors,
  onSubmit,
  showToChangePassword,
  onClick,
  timerKey,
}: FindPasswordCheckFormProps) {
  return (
    <div>
      <Timer key={timerKey} />
      <form onSubmit={onSubmit} className="h-full flex w-full justify-between">
        <InputForm
          register={register}
          id="certification"
          name="certification"
          type="text"
          placeholder="인증번호"
          isError={Boolean(errors.email)}
          notice={errors.email?.message}
          width="w-64"
          height="h-12"
        />
        <FillButton
          bgColor="bg-g4"
          height="h-12"
          width="w-12"
          type="submit"
          font="p2r"
          title="인증"
        />
      </form>
      {showToChangePassword && (
        <FillButton
          bgColor="bg-g4"
          height="h-12"
          width="w-80"
          type="button"
          font="h3b"
          onClick={onClick}
          title="비밀번호 변경하기"
        />
      )}
    </div>
  );
}

import InputForm from '@/app/auth/molecules/InputForm';
import BothButtonGroup from '@/components/molecules/BothButtonGroup';
import { ReactHookFormType } from '@/types/auth';
import { passwordPattern } from '@/util/validation';

interface ProfilePasswordUpdateModalProps extends ReactHookFormType {
  closeModal: () => void;
}

/**
 * @param {() => void} closeModal modal을 닫는 callback함수
 * @returns ProfilePasswordUpdateModal Component
 */

export default function ProfilePasswordUpdateModal({
  closeModal,
  register,
  errors,
  onSubmit,
  watch,
}: ProfilePasswordUpdateModalProps) {
  const newPassword = watch('password');
  const newPasswordCheck = watch('passwordCheck');
  return (
    <section className="w-80 h-1/2 bg-white rounded-[10px]">
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col h-full justify-evenly px-4"
      >
        <h1 className="h1b">비밀번호 변경</h1>
        <div className="h-1/2 flex flex-col justify-around">
          <InputForm
            register={register}
            validation={passwordPattern}
            id="newPassword"
            name="newPassword"
            type="password"
            placeholder="비밀번호"
            isError={Boolean(errors.password)}
            notice="비밀번호는 8~16자의 영문(대/소문자), 숫자, 특수문자 조합입니다."
            width="w-72"
            height="h-12"
          />
          <InputForm
            register={register}
            validation={passwordPattern}
            id="newPasswordCheck"
            name="newPasswordCheck"
            type="password"
            placeholder="비밀번호 확인"
            isError={
              newPassword !== newPasswordCheck || newPasswordCheck === ''
            }
            notice="비밀번호와 같은 값을 입력해주세요."
            width="w-72"
            height="h-12"
          />
        </div>
        <div className="w-72">
          <BothButtonGroup
            leftTitle="뒤로가기"
            onClickLeft={closeModal}
            rightTitle="변경하기"
            rightType="submit"
          />
        </div>
      </form>
    </section>
  );
}

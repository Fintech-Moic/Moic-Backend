import InputForm from '@/app/auth/molecules/InputForm';
import BothButtonGroup from '@/components/molecules/BothButtonGroup';
import { ReactHookFormType } from '@/types/auth';

interface ProfilePasswordCheckModalProps extends ReactHookFormType {
  closeModal: () => void;
}

/**
 * @param {() => void} closeModal modal을 닫는 callback함수
 * @returns ProfilePasswordCheckModal Component
 */

export default function ProfilePasswordCheckModal({
  closeModal,
  register,
  errors,
  onSubmit,
}: ProfilePasswordCheckModalProps) {
  return (
    <section className="w-80 h-1/2 bg-white rounded-[10px]">
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col h-full justify-evenly px-4"
      >
        <h1 className="h1b">비밀번호 확인</h1>
        <InputForm
          register={register}
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          isError={Boolean(errors.password)}
          notice={errors.password?.message}
          width="w-72"
          height="h-12"
        />
        <div className="w-72">
          <BothButtonGroup
            leftTitle="뒤로가기"
            onClickLeft={closeModal}
            rightTitle="확인하기"
            rightType="submit"
          />
        </div>
      </form>
    </section>
  );
}

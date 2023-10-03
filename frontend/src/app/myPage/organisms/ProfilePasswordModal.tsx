import InputForm from '@/app/auth/molecules/InputForm';
import BothButtonGroup from '@/components/molecules/BothButtonGroup';
import { ReactHookFormType } from '@/types/auth';

interface ProfilePasswordModalProps extends ReactHookFormType {
  closeModal: () => void;
}

export default function ProfilePasswordModal({
  closeModal,
  register,
  errors,
  onSubmit,
}: ProfilePasswordModalProps) {
  return (
    <section className="w-80 h-1/2 bg-white rounded-[10px]">
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col h-full justify-evenly px-4"
      >
        <h1 className="h1b">비밀번호 변경</h1>
        <InputForm
          register={register}
          id="password"
          name="password"
          type="password"
          placeholder="새로운 비밀번호"
          isError={Boolean(errors.id)}
          notice={errors.id?.message}
          width="w-72"
          height="h-12"
        />
        <InputForm
          register={register}
          id="passwordCheck"
          name="passwordCheck"
          type="password"
          placeholder="새로운 비밀번호 확인"
          isError={Boolean(errors.password)}
          notice={errors.password?.message}
          width="w-72"
          height="h-12"
        />
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

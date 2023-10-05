interface SwitchProps {
  isOn: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * @param {Boolean} isOn 전체보기/내 카드 보기를 구분짓는 상태
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setIsOn isOn 상태를 수정하는 setState 함수
 * @returns {JSX.Element} 컴포넌트 반환
 */
export default function Switch({ isOn, onClick }: SwitchProps) {
  return (
    <div
      className={`w-14 h-7 rounded-2xl relative items-center transition-all duration-500 ease-in-out${
        isOn ? 'justify-end bg-g4' : 'justify-start bg-SwitchBg'
      }`}
    >
      <button
        type="button"
        aria-label="Save"
        className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transform transition-transform duration-500 ease-in-out ${
          isOn ? 'translate-x-7' : 'translate-x-0'
        }`}
        onClick={onClick}
      />
    </div>
  );
}

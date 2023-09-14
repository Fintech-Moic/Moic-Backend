/**
 * InputValidationBox
 * @param type => 인풋 태그 타입 설정 변수
 * @param placeholder => 플레이스 홀더에 들어갈 변수
 * @param keyName => 유저 객체에 저장할 키 네임
 * @param getter => 기존 유저 값
 * @param setter() => 인풋 태그의 값 세팅할 setter
 * @param notice => 하단에 띄울 경고 문구
 */

interface InputValidationBoxProps {
  type: string;
  placeholder: string;
  value: string;
  getter?: object;
  setter: React.Dispatch<React.SetStateAction<object>>;
  notice?: string;
}

export default function InputValidationBox({
  type,
  placeholder,
  value,
  getter = [],
  setter,
  notice,
}: InputValidationBoxProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setter({
      ...getter,
      [name]: value,
    });
  };
  return (
    <div>
      <input
        onChange={(e) => onChange(e)}
        className="min-w-full text-white bg-transparent border-b-2 border-slate-50 mt-2 placeholder:text-slate-50"
        type={type}
        placeholder={placeholder}
        value={value}
      />
      <p>{notice}</p>
    </div>
  );
}

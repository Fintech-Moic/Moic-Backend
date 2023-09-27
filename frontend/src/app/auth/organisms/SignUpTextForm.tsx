import TextBox from '../atoms/TextBox';

export default function SignUpTextForm() {
  return (
    <div>
      <TextBox width="w-80" height="h-80 rounded-[10px]">
        <div>
          <h1 className="h1b">개인정보 처리방침</h1>
          <br />
          <p className="p2r">
            핀프들(이하 &quot;회사&quot;라 함)은 개인정보보호법을 준수하며, 관련
            법령에 의거한 개인정보처리방침을 정하여 이용자 권익 보호에 최선을
            다하고 있습니다. 회사의 개인정보처리방침은 다음과 같은 내용을 담고
            있습니다.
          </p>
          <br />
          <h3 className="p2b"> 1. 개인정보의 처리 목적 및 수집 항목</h3>
        </div>
      </TextBox>
    </div>
  );
}

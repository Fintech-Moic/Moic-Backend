import Link from 'next/link';
import Image from 'next/image';
import notFound from '@/../public/assets/images/notFound.png';

export default function NotFound() {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center flex-col gap-10">
      <h1 className="h1b">페이지를 찾을 수 없습니다.</h1>
      <Image src={notFound} alt="notFound이미지" width="340" height="340" />
      <div className="flex flex-col items-center justify-center">
        <span>존재하지 않는 주소를 입력 하셨거나,</span>
        <span>요청하신 페이지의 주소가 변경, 삭제된 것 같습니다.</span>
      </div>
      <button
        type="button"
        className="w-32 h-10 bg-o4 rounded-[10px] text-white p3b"
      >
        <Link href="/home" replace>
          홈으로 돌아가기
        </Link>
      </button>
    </div>
  );
}

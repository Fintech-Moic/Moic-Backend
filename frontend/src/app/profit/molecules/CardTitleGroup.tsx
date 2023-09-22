import CardMainTitle from '../atoms/CardMainTitle';
import CardSubTitle from '../atoms/CardSubTitle';

interface CardTitleGroupProps {
  mainTitle: {
    value: string;
    size: string;
  };
  subTitle: {
    value: string;
    size: string;
  };
}

/** 카드 관심사에서 사용되는 메인, 서브 타이틀로 구성된 타이틀 컴포넌트
 * @param {Object} mainTitle 메인 타이틀의 폰트 사이즈, 텍스트를 가진 object
 * @param {Object} subTitle 서브 타이틀의 폰트 사이즈, 텍스트를 가진 object
 * @returns {JSX.Element} 컴포넌트 반환
 */

export default function CardTitleGroup({
  mainTitle,
  subTitle,
}: CardTitleGroupProps) {
  return (
    <div className="flex flex-col justify-start items-start w-full">
      <CardMainTitle {...mainTitle} />
      <CardSubTitle {...subTitle} />
    </div>
  );
}

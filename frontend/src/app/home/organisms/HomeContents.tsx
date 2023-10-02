import HomeADBox from '../atoms/HomeADBox';
import HomeLogo from '../atoms/HomeLogo';
import HomeTipBar from '../atoms/HomeTipBar';
import HomeDDnName from '../molecules/HomeDDnName';
import { HomeDDnNameProps } from '@/types/home';
import banner from '@/../public/assets/images/banner.svg';

interface HomeContentsProps extends HomeDDnNameProps {}

/** HomeContentsProps
 * @returns {JSX.Element} HomeContents Component
 */

export default function HomeContents({
  isOpen,
  items,
  name,
  signOut,
  onClick,
  innerRef,
}: HomeContentsProps) {
  return (
    <article className="flex flex-col justify-evenly h-56">
      <div className="flex justify-between h-">
        <HomeLogo />
        <HomeDDnName
          isOpen={isOpen}
          items={items}
          name={name}
          signOut={signOut}
          onClick={onClick}
          innerRef={innerRef}
        />
      </div>
      <HomeTipBar width="w-full" height="h-10">
        [절약 Tip] 너무 자주 씻지 말아요!
      </HomeTipBar>
      <HomeADBox imgSrc={banner} width="w-80" height="h-20" going="" />
    </article>
  );
}

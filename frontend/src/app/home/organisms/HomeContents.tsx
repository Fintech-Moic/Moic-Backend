import HomeADBox from '../atoms/HomeADBox';
import HomeLogo from '../atoms/HomeLogo';
import HomeTipBar from '../atoms/HomeTipBar';
import HomeDDnName from '../molecules/HomeDDnName';
import { HomeDDnNameProps } from '@/types/home';

interface HomeContentsProps extends HomeDDnNameProps {}

export default function HomeContents({
  isOpen,
  items,
  name,
}: HomeContentsProps) {
  return (
    <article className="flex flex-col flex-around">
      <div className="flex justify-between h-">
        <HomeLogo />
        <HomeDDnName isOpen={isOpen} items={items} name={name} />
      </div>
      <HomeTipBar width="w-full" height="h-10">
        <p>[절약 Tip] 너무 자주 씻지 말아요!</p>
      </HomeTipBar>
      <HomeADBox
        imgSrc="https://github.com/Legitgoons/Everyones-Subway/assets/101088491/2a3a294e-c315-4a2a-a2ed-1d3d53bd1f3b"
        width="w-full"
        height="h-20"
        going="https://github.com/Legitgoons/Everyones-Subway"
      />
    </article>
  );
}

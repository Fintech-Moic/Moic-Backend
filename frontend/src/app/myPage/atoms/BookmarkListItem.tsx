/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import BlackCheckIcon from '@/../public/assets/BlackCheckIcon.svg';

interface BookmarkListItemProps {
  listType: string;
  category: string;
  shopName: string;
  shopLocation: string;
  address: string;
  latitude: string;
  longitude: string;
  isSelected: boolean;
}
export default function BookmarkListItem({
  listType,
  category,
  shopName,
  shopLocation,
  address,
  latitude,
  longitude,
  isSelected = false,
}: BookmarkListItemProps) {
  return (
    <li
      className="w-full flex justify-between items-center"
      id={`${shopName} ${shopLocation}`}
    >
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="flex flex-row items-center justify-center gap-1">
          <h3 className="p2b">
            {shopName} {shopLocation}
          </h3>
          <h4 className="captionr text-CardSubtitle">{category}</h4>
        </div>

        <span className="captionr">{address}</span>
      </div>
      {listType === 'modify' && (
        <div className="relative inline-block align-middle w-5 h-5 cursor-pointer">
          <input
            type="checkbox"
            className="absolute opacity-0 h-full w-full cursor-pointer"
          />
          <div className="box-border flex justify-center items-center w-5 h-5 rounded-md bg-Tertiary transition-all duration-150">
            <Image
              src={BlackCheckIcon}
              alt="클릭아이콘"
              className={`${isSelected ? 'visible' : 'invisible'}`}
            />
          </div>
        </div>
      )}
    </li>
  );
}

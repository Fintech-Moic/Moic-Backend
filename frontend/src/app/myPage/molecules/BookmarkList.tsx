'use client';

/* eslint-disable react-hooks/exhaustive-deps */

import { Fragment, useEffect, useState } from 'react';
import { useSetAtom } from 'jotai';
import BookmarkListItem from '../atoms/BookmarkListItem';
import { bookmarkDeleteModalAtom } from '@/store/atoms/modal';

interface Bookmark {
  category: string;
  shopName: string;
  shopLocation: string;
  address: string;
  latitude: string;
  longitude: string;
  isSelected: boolean;
}

interface CardListProps {
  list: Bookmark[];
  currentPage: number;
  listType: string;
  listItemCount: number;
}
/** 북마크 아이템으로 구성된 리스트 컴포넌트
 * @param {Array} list 북마크 response의 array
 * @param {Number} currentPage 현재 페이지를 나타내는 정수
 * @param {String} listType 현재 북마크 리스트의 타입 (일반 읽기, 수정)
 * @param {Number} listItemCount 현재, 한번에 보여줄 북마크 리스트 아이템 수
 * @returns {JSX.Element} 컴포넌트 반환
 */
export default function BookmarkList({
  list,
  listType,
  currentPage,
  listItemCount,
}: CardListProps) {
  const [currentList, setCurrentList] = useState<Bookmark[]>([]);
  const setBookmarkDeleteModal = useSetAtom(bookmarkDeleteModalAtom);

  useEffect(() => {
    const curPageList = list.slice(
      (currentPage - 1) * listItemCount,
      Math.min(currentPage * listItemCount, list.length)
    );
    setCurrentList(() => [...curPageList.map((cur) => ({ ...cur }))]);
    setBookmarkDeleteModal((prev) => ({
      ...prev,
      selectedBookmarkList: [
        ...curPageList
          .filter((cur) => cur.isSelected)
          .map(({ shopName, shopLocation }) => ({
            shopName,
            shopLocation,
          })),
      ],
    }));
  }, [currentPage, list]);

  const handleClickBookmarkItem = async (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const closestBookmarkItem = (e.target as HTMLDivElement).closest('li');
    if (!closestBookmarkItem || listType === 'read') return;
    const curShopName = closestBookmarkItem.id as string;
    const newCurrentList = currentList.map((curListItem) => {
      if (
        `${curListItem.shopName} ${curListItem.shopLocation}` === curShopName
      ) {
        return { ...curListItem, isSelected: !curListItem.isSelected };
      }
      return { ...curListItem };
    });

    setCurrentList(newCurrentList);
    setBookmarkDeleteModal((prev) => ({
      ...prev,
      selectedBookmarkList: [
        ...newCurrentList
          .filter(({ isSelected }) => isSelected)
          .map(({ shopName, shopLocation }) => ({ shopName, shopLocation })),
      ],
    }));
  };

  return (
    <div
      className="flex flex-col w-full gap-4 justify-start items-start h-[372px]"
      onClick={handleClickBookmarkItem}
      aria-hidden="true"
    >
      {currentList.map((curListItem, idx) => (
        <Fragment key={`${curListItem.shopName}-${curListItem.shopLocation}`}>
          <BookmarkListItem listType={listType} {...curListItem} />
          {idx !== currentList.length - 1 && (
            <hr className="h-[1px] border-t-2 opacity-50 w-full" />
          )}
        </Fragment>
      ))}
    </div>
  );
}

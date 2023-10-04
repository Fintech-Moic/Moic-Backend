/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import Swal from 'sweetalert2';
import BookmarkButtonGroup from '../molecules/BookmarkTopButtonGroup';
import BookmarkList from '../molecules/BookmarkList';
import Pagination from '@/components/molecules/Pagination';
import { getMyBookmark, postBookmarkDelete } from '@/api/myPage';
import Modal from '@/components/atoms/Modal';
import { bookmarkDeleteModalAtom } from '@/store/atoms/modal';
import TitleSentence from '@/components/atoms/TitleSentence';
import BothButtonGroup from '@/components/molecules/BothButtonGroup';

interface Bookmark {
  category: string;
  shopName: string;
  shopLocation: string;
  address: string;
  latitude: string;
  longitude: string;
  isSelected: boolean;
}

/** 페이지네이션과 북마크 리스트 융합된 organisms 컴포넌트
 * @returns {JSX.Element} 컴포넌트 반환
 */

interface PaginatedBookmarkListProps {
  usePage: 'myPage' | 'map';
}
export default function PaginatedBookmarkList({
  usePage,
}: PaginatedBookmarkListProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [listType, setListType] = useState('read');
  const [{ isOpen, selectedBookmarkList }, setBookmarkDeleteModal] = useAtom(
    bookmarkDeleteModalAtom
  );
  const { data: BookmarkData, isLoading } = useQuery<any>({
    queryKey: ['getMyBookmark'],
    queryFn: () => getMyBookmark(),
    staleTime: 1000 * 60 * 100,
    refetchOnWindowFocus: false,
  });
  const [shopList, setShopList] = useState<Bookmark[]>([]);
  const bookmarkDeleteMutation = useMutation({
    mutationFn: () =>
      postBookmarkDelete({
        userId: 'test1234',
        shopList: selectedBookmarkList,
      }),
    onSuccess: (data) => {
      if (
        data &&
        !Object.keys(data).includes('errorCode') &&
        !Object.keys(data).includes('status')
      ) {
        setBookmarkDeleteModal((prev) => ({
          ...prev,
          isOpen: false,
          selectedBookmarkList: [],
        }));
        Swal.fire({
          icon: 'success',
          title: '북마크 삭제 성공',
          text: '성공적으로 삭제했습니다!',
        });
        return;
      }
      setBookmarkDeleteModal((prev) => ({
        ...prev,
        isOpen: false,
      }));
      Swal.fire({
        icon: 'error',
        title: '북마크 삭제 실패',
        text: '다시 시도해주세요!',
      });
    },
    onError: () => {
      setBookmarkDeleteModal((prev) => ({
        ...prev,
        isOpen: false,
      }));
      Swal.fire({
        icon: 'error',
        title: '북마크 삭제 실패',
        text: '다시 시도해주세요!',
      });
    },
  });

  useEffect(() => {
    if (!BookmarkData) return;
    setShopList([
      ...BookmarkData.data.shopList.map((cur: any) => ({
        ...cur,
        isSelected: false,
      })),
    ]);
  }, []);

  useEffect(() => {
    setBookmarkDeleteModal((prev) => ({
      ...prev,
      isOpen: false,
      selectedBookmarkList: [],
    }));
    setShopList((prev) => [
      ...prev.map((cur) => ({ ...cur, isSelected: false })),
    ]);
  }, [currentPage]);

  if (isLoading) return <div>로딩중...</div>;

  const listItemCount = usePage === 'myPage' ? 5 : 4;
  const totalPageLength = Math.ceil(shopList.length / listItemCount);

  const handleClickBookmarkDelete = () => {
    bookmarkDeleteMutation.mutate(undefined);
  };

  const handleClickTotalSelect = () => {
    setShopList((prev) => [
      ...prev.map((cur, idx) => {
        if (
          idx >= currentPage * listItemCount &&
          idx < Math.min((currentPage + 1) * listItemCount, shopList.length)
        )
          return { ...cur, isSelected: !cur.isSelected };
        return { ...cur };
      }),
    ]);
  };

  const handleClickModalOpen = () => {
    if (selectedBookmarkList.length === 0) {
      Swal.fire({
        icon: 'error',
        title: '북마크 삭제 실패',
        text: '최소 1개 이상의 북마크를 선택해주세요!',
      });
      return;
    }
    setBookmarkDeleteModal((prev) => ({ ...prev, isOpen: true }));
  };
  const handleClickModalClose = () => {
    setBookmarkDeleteModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="flex flex-col items-center h-full w-[348px] pb-6 justify-center gap-8 pt-14">
      {totalPageLength === 0 ? (
        <div className="h3b text-black opacity-50 h-full flex items-center flex-col justify-center break-words">
          <span>북마크가 존재하지 않아요...</span>
          <span>지도에서 북마크를 추가해볼까요?</span>
        </div>
      ) : (
        <>
          {isOpen && selectedBookmarkList && (
            <Modal>
              <div className="flex flex-col justify-center gap-20 items-center w-full">
                <TitleSentence
                  title=""
                  sentence={`지금 선택한 ${selectedBookmarkList.length}건을 삭제하실 건가요?`}
                />
                <ul>
                  {selectedBookmarkList.map(
                    ({
                      shopName,
                      shopLocation,
                    }: {
                      shopName: string;
                      shopLocation: string;
                    }) => (
                      <li key={`${shopName}-${shopLocation}`}>
                        <span>{shopName} </span>
                        <span>{shopLocation}</span>
                      </li>
                    )
                  )}
                </ul>
                <BothButtonGroup
                  leftTitle="뒤로가기"
                  rightTitle="삭제하기"
                  onClickLeft={handleClickModalClose}
                  onClickRight={handleClickBookmarkDelete}
                />
              </div>
            </Modal>
          )}
          <BookmarkButtonGroup
            listType={listType}
            setListType={setListType}
            isEmptyBookmark={shopList.length === 0}
            onClickDelete={handleClickModalOpen}
            onClickTotalSelect={handleClickTotalSelect}
          />
          <BookmarkList
            listType={listType}
            list={shopList}
            listItemCount={listItemCount}
            currentPage={currentPage + 1}
          />
          <Pagination
            idx={currentPage}
            setIdx={setCurrentPage}
            pageLength={totalPageLength}
          />
        </>
      )}
    </div>
  );
}

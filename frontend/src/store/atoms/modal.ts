import { atom } from 'jotai';

export const cardDeleteModalAtom = atom({
  isOpen: false,
  deleteCardInfo: {} as any,
});
export const giftDeleteModalAtom = atom({
  isOpen: false,
  deleteGiftInfo: {} as any,
});
export const bookmarkDeleteModalAtom = atom({
  isOpen: false,
  selectedBookmarkList: [] as any,
});

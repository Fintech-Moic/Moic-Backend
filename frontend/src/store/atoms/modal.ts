import { atom } from 'jotai';
import {
  ICardDeleteModalAtom,
  IGiftDeleteModalAtom,
  IBookmarkDeleteModalAtom,
} from '@/types/store/modal';

export const cardDeleteModalAtom = atom<ICardDeleteModalAtom>({
  isOpen: false,
  deleteCardInfo: {},
});
export const giftDeleteModalAtom = atom<IGiftDeleteModalAtom>({
  isOpen: false,
  deleteGiftInfo: {},
});
export const bookmarkDeleteModalAtom = atom<IBookmarkDeleteModalAtom>({
  isOpen: false,
  selectedBookmarkList: [],
});

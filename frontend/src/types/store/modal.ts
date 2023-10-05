import { Card } from '../card';
import GiftCard from '../giftCard';

export interface IModalAtom {
  isOpen: boolean;
}

export interface ICardDeleteModalAtom extends IModalAtom {
  deleteCardInfo: Partial<Card>;
}

export interface IGiftDeleteModalAtom extends IModalAtom {
  deleteGiftInfo: Partial<GiftCard>;
}

export interface IBookmarkDeleteModalAtom extends IModalAtom {
  selectedBookmarkList: Array<{ shopName: string; shopLocation: string }>;
}

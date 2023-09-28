import { atom } from 'jotai';

const cardDeleteModalAtom = atom({ isOpen: false, deleteCardInfo: {} as any });

export default cardDeleteModalAtom;

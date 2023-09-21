import { atom } from 'jotai';

export const titleAtom = atom('');
export const prevExistAtom = atom(false);
export const filterOpenAtom = atom(false);
export const filterExistAtom = atom(false);
export const filterOptionAtom = atom({ company: '', type: '', cardName: '' });

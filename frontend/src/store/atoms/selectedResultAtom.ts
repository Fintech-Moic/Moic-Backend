import { atom } from 'jotai';

const selectedResultAtom = atom<string | null>(null);

export default selectedResultAtom;

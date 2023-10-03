import { atom } from 'jotai';

interface curLoc {
  lat: number;
  lng: number;
}

export const curLocAtom = atom<curLoc>({
  lat: 0,
  lng: 0,
});

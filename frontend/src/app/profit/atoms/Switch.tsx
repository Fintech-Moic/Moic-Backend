'use client';

import { atom, useAtom } from 'jotai';
/*
width: 52px;
height: 28px;
*/
const switchAtom = atom(false);
export default function Switch() {
  const [isOn, setIsOn] = useAtom(switchAtom);
  const handleClickSwitch = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <div
      className={`w-14 h-7 rounded-2xl relative items-center transition-all duration-500 ease-in-out${
        isOn ? 'justify-end bg-g4' : 'justify-start bg-[#E8E8E8]'
      }`}
    >
      <button
        type="button"
        aria-label="Save"
        className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transform transition-transform duration-500 ease-in-out ${
          isOn ? 'translate-x-7' : 'translate-x-0'
        }`}
        onClick={handleClickSwitch}
      />
    </div>
  );
}

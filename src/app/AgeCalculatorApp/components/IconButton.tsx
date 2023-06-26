import { FC } from 'react';
import ArrowDown from '@/app/AgeCalculatorApp/res/images/icon-arrow.svg';
import Image from 'next/image';

const IconButton: FC = () => {
  return (
    <button
      className="p-4 rounded-full bg-indigo-500 active:bg-black"
      type="submit"
    >
      <Image
        className="text-2xl m-auto text-white"
        src={ArrowDown}
        alt="submit"
      />
    </button>
  );
};

export default IconButton;

import { FC } from "react";
import Image from "next/image";

interface Props {
  value: string;
  label: string;
}

const CountDownItem: FC<Props> = ({ value, label }) => {
  const valueFormatted = () => {
    if (value.length === 1) {
      return `0${value}`;
    } else {
      return value;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="h-24 w-24 relative rounded-lg bg-gradient-to-b from-[#1e1f29] to-[#343650]">
        <h1 className="w-full absolute top-1/2 -translate-y-1/2 font-bold text-[#fb6087] text-4xl text-center">
          {valueFormatted()}
        </h1>
        <div className="w-full top-1/2 -translate-y-1/2 absolute flex flex-row justify-center items-center">
          <div className="h-2 w-1 bg-[#191a24] rounded-tr-full rounded-br-full" />
          <div className="h-[0.5px] w-full bg-[#191a24]" />
          <div className="h-2 w-1 bg-[#191a24] rounded-tl-full rounded-bl-full" />
        </div>
      </div>
      <p className="text-xs text-[#8486a9] uppercase">{label}</p>
    </div>
  );
};

export default CountDownItem;

import { FC } from "react";

interface Props {
  value: string;
  label: string;
}

const InfoItem: FC<Props> = ({ value, label }) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center lg:justify-start lg:items-start gap-1 lg:gap-2">
      <h2 className="uppercase text-gray-400 text-xs sm:text-sm lg:text-lg">{label}</h2>
      <p className="text-black text-sm sm:text-lg lg:text-xl xl:text-2xl line-clamp-2">
        {value}
      </p>
    </div>
  );
};

export default InfoItem;

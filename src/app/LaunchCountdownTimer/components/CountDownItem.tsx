import { FC } from "react";
import Image from "next/image";

interface Props {
  value: number;
  label: string;
}

const CountDownItem: FC<Props> = ({ value, label }) => {
  return (
    <div className="text-center">
      <h1>{value}</h1>
      <p>{label}</p>
    </div>
  );
};

export default CountDownItem;

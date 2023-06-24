import { type } from "os";
import { FC } from "react";

interface Props {
  name: "day" | "month" | "year";
  value: string;
  onChange: (value: string) => void;
}

const Input: FC<Props> = ({ name, value, onChange }) => {
  const maxLength = () => {
    switch (name) {
      case "day":
        return 2;
      case "month":
        return 2;
      case "year":
        return 4;
    }
  };

  const placeholder = () => {
    switch (name) {
      case "day":
        return "DD";
      case "month":
        return "MM";
      case "year":
        return "YYYY";
    }
  };
  return (
    <div className="flex flex-col gap-1">
      <label className="capitalize">{name}</label>
      <input
        className=""
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="number"
        placeholder={placeholder()}
        maxLength={maxLength()}
      />
    </div>
  );
};

export default Input;

import { FC } from 'react';
import { useFormikContext } from 'formik';

interface Props {
  name: 'day' | 'month' | 'year';
}

const Input: FC<Props> = ({ name }) => {
  const maxLength = () => {
    switch (name) {
      case 'day':
        return 2;
      case 'month':
        return 2;
      case 'year':
        return 4;
    }
  };

  const placeholder = () => {
    switch (name) {
      case 'day':
        return 'DD';
      case 'month':
        return 'MM';
      case 'year':
        return 'YYYY';
    }
  };

  const { values, setFieldValue, errors, touched } = useFormikContext();

  const textColor = (errors as any)[name] && (touched as any)[name] ? "text-red-600" : "text-gray-400"

  const borderColor = (errors as any)[name] && (touched as any)[name] ? "border-red-600" : "border-gray-400/25 focus:border-indigo-500"

  return (
    <div className=" w-1/3 md:w-[120px] flex flex-col gap-1">
      <label
        htmlFor={name}
        className={`text-[10px] capitalize font-bold ${textColor}`}
      >
        {name.toUpperCase()}
      </label>
      <input
        name={name}
        className={`h-12 w-full text-2xl placeholder:text-xl p-2 border-[1px] rounded-md placeholder:font-bold font-bold outline-none ${borderColor}`}
        value={(values as any)[name]}
        onChange={(e) => {
          if (e.target.value.length <= maxLength())
            setFieldValue(name, e.target.value);
        }}
        type="number"
        placeholder={placeholder()}
        maxLength={maxLength()}
      />
      {
        ((errors as any)[name] && (touched as any)[name]) && <span className="text-sm text-red-600 whitespace-pre-line"> {(errors as any)[name]} </span>
      }
    </div>
  );
};

export default Input;

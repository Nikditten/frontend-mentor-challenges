import { FC } from 'react';

interface Props {
  value: number | undefined;
  label: string;
}

const ResultText: FC<Props> = ({ label, value }) => {
  const currentValue = value ?? '--';

  return (
    <h1 className="py-1 text-indigo-500 font-extrabold text-5xl sm:text-6xl md:text-8xl">
      {currentValue} <span className='text-black'>{label}</span>
    </h1>
  );
};

export default ResultText;

import { FC } from "react";
import { MdChevronRight } from "react-icons/md";

interface Props {
  onSubmit: () => void;
  onChange: (ip: string) => void;
}

const SearchForm: FC<Props> = ({ onSubmit, onChange }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="w-10/12 lg:w-full flex flex-row justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/4 lg:translate-y-1/4"
    >
      <input
        className="h-12 w-full lg:w-1/3 px-4 py-2 rounded-l-xl rounded-r-none focus:outline-none"
        placeholder="Search for any IP address or domain"
        onChange={(e) => onChange(e.target.value)}
      />

      <button className="h-12 w-12 bg-black rounded-r-xl text-white p-2">
        <MdChevronRight className="h-full w-full" />
      </button>
    </form>
  );
};

export default SearchForm;

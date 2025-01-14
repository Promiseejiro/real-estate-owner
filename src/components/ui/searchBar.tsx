import React from "react";
import { CiSearch } from "react-icons/ci";

interface ISearchBar {
  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ value, setValue }: ISearchBar) => {
  return (
    <div className="w-full px-4 py-[10px] rounded-full bg-lightGreyPlus flex items-center gap-2">
      <CiSearch size={25} className="text-grey" />
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-transparent flex-1 outline-none placeholder:text-grey text-sm"
        autoComplete="off"
      />
    </div>
  );
};

export default SearchBar;

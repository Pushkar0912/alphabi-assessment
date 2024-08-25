"use client";

export default function SearchBar({ searchValue, setSearchValue, handleSearch }) {
  return (
    <div className="flex justify-center gap-4 items-center">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
            setSearchValue(e.target.value);
            handleSearch()
        }}
        placeholder="Search for GIFs"
        className="rounded-[12px] text-[20px] h-[50px] flex flex-grow items-center justify-center gap-2.5 bg-gray-100 pl-6 pr-3 font-medium text-black-900"
      />
      <button
        className="rounded-[12px] min-w-[110px] text-[20px] h-[50px] flex items-center justify-center bg-black px-4 text-white font-medium"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

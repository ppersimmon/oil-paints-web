import SearchIcon from "../../../assets/icons/search.svg?react";

const FilterBar = () => {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex w-full items-center gap-x-3 lg:w-auto">
        <button className="bg-red w-30 py-2 text-center text-base font-semibold text-white lg:hidden">
          Filter
        </button>

        <div className="relative w-30 lg:max-w-xs">
          <input
            type="text"
            placeholder="Search"
            className="placeholder-text-secondary border-border w-full border px-4 py-1 text-base"
          />
          <SearchIcon className="text-text-secondary absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2" />
        </div>
      </div>

      <div className="hidden flex-wrap gap-2 lg:flex">
        <button className="bg-red font-regular flex items-center px-2 py-1 text-base text-white">
          New
        </button>
        <button className="font-regular text-text-secondary bg-gray-100 px-2 py-1 text-base">
          Price ascending
        </button>
        <button className="font-regular text-text-secondary bg-gray-100 px-2 py-1 text-base">
          Price descending
        </button>
        <button className="font-regular text-text-secondary bg-gray-100 px-2 py-1 text-base">
          Rating
        </button>
      </div>
    </div>
  );
};

export default FilterBar;

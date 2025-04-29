import React from "react";

const Searchbar = () => {
  return (
    <div>
      <div classNameName="flex-1 max-w-xs ml-8 mr-auto ">
        <label for="" className="sr-only"> 
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            type="search"
            name=""
            id=""
            className="text-white block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
            placeholder="Search here"
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;

import React, { useState } from "react";

export default function SearchBar({ data }) {
  const [searching, setSearching] = useState("");

  // Filter data only when there's a search query
  const filteredData = data?.filter((item) =>
    item.productName.toLowerCase().includes(searching.toLowerCase()),
  );

  return (
    <div>
      {/* Input Field */}
      <label className="input input-bordered flex items-center gap-2">
        <input
          onChange={(e) => setSearching(e.target.value)}
          value={searching}
          type="text"
          className="grow"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70 hover:cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      {/* Display search results only if searching */}
      {searching && (
        <ul className="search-results max-h-48 overflow-auto rounded-lg border border-gray-200 bg-white">
          {filteredData?.length > 0 ? (
            filteredData.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer p-2 hover:bg-gray-100"
              >
                {item.productName}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}

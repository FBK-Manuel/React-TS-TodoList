// import React from 'react'

import { IoMdSearch } from "react-icons/io";
import { searchInputProp } from "./Type";
import { useState } from "react";

function Search({ onSubmit }: searchInputProp) {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(query);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="relative w-full sm:w-auto flex items-center">
        <input
          type="text"
          className="w-full sm:w-auto bg-[#262626] text-white p-2 pr-10 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search Note..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="absolute right-2">
          <IoMdSearch className="text-white font-sans font-bold text-xl hover:text-blue-500" />
        </button>
      </form>
    </div>
  );
}

export default Search;

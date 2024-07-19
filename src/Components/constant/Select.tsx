import { dropdownType } from "../Type";

// import React from 'react'

const Select: React.FC<dropdownType> = ({ filtered, setFiltered }) => {
  return (
    <div>
      <select
        value={filtered}
        onChange={(e) => setFiltered(e.target.value)}
        className="ml-6 bg-[#1E6F9F] p-3 border border-black rounded">
        <option value="select" disabled>
          Select
        </option>
        <option value="All">All</option>
        <option value="Complete">Complete</option>
        <option value="Incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default Select;

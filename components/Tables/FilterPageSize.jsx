import React from "react";

const FilterPageSize = ({ onChange }) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <label htmlFor="pageSize">Show</label>
      <select
        name="pageSize"
        id="pageSize"
        className="bg-white dark:bg-slate-700 border border-primary rounded-lg py-2 px-4 font-semibold shadow-lg"
        onChange={onChange}
        defaultValue={"5"}
      >
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      <span>entries</span>
    </div>
  );
};

export default FilterPageSize;

import React, { useImperativeHandle, useState } from "react";

const SearchButton = ({ onChange, value }) => {
  return (
    <input
      type="text"
      onChange={onChange}
      value={value}
      className="py-1 px-4 rounded-lg border border-primary shadow appearance-none outline-none caret-primary dark:bg-slate-700"
      placeholder="Search here ..."
    />
  );
};

export default SearchButton;

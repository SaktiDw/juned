import React from "react";

const PeriodeSelection = () => {
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor="periode">Periode</label>
      <select
        name="periode"
        id="periode"
        className="py-2 px-4 bg-white dark:bg-slate-700 rounded-md shadow-xl"
      >
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  );
};

export default PeriodeSelection;

import { fetchSemester } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const PeriodeSelection = ({ onChange }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["periode"],
    queryFn: () => fetchSemester(),
  });
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor="periode">Periode</label>
      <select
        name="periode"
        id="periode"
        className="py-2 px-4 bg-white dark:bg-slate-700 rounded-md shadow-xl"
        onChange={onChange}
        defaultValue={""}
      >
        <option value="">Semua periode</option>
        {data &&
          data?.map((item, index) => (
            <option key={item.id} value={item.id}>
              {item.nama}
            </option>
          ))}
      </select>
    </div>
  );
};

export default PeriodeSelection;

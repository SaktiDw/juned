import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FilterPageSize, Pagination } from "..";

const Table = ({
  columns,
  data = [],
  createLink = undefined,
  searchAble = false,
  isLoading,
}) => {
  const [perPage, setPerpage] = useState(5);
  const [localData, setLocalData] = useState(data);
  const [selectedPage, setSelectedPage] = useState(1);
  const indexOfLastItem = selectedPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;

  useEffect(() => {
    setLocalData(data);
  }, [isLoading, data.length]);

  const handleFilter = (searchTerm) => {
    const filtered = data?.filter((item) => {
      const values = Object.values(item);

      for (const value of values) {
        if (
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm?.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });
    // {
    //   return item.pangkat_golongan
    //     .toLowerCase()
    //     .includes(searchTerm.toLowerCase());
    // });

    setLocalData(filtered);
    setSelectedPage(1);
  };

  return (
    <section
      className={`${
        isLoading ? "animate-pulse" : ""
      } grid grid-flow-row gap-6 p-4 z-10 overflow-x-auto w-full rounded-xl shadow-lg bg-white dark:bg-slate-800`}
    >
      <div className="flex justify-between gap-6">
        <FilterPageSize onChange={(e) => setPerpage(e.target.value)} />
        {createLink && (
          <Link
            href={createLink}
            className="ml-auto flex items-center gap-2 py-2 px-4 w-min bg-primary rounded-lg shadow-lg text-white text-sm"
          >
            <i className="fi-rr-plus"></i>
            Tambah
          </Link>
        )}
        {searchAble && (
          <div className="relative group border border-slate-500 hover:border-primary rounded-lg">
            <input
              onChange={(e) => handleFilter(e.target.value)}
              type="text"
              className="py-2 px-4 text-sm w-min rounded-lg shadow-lg dark:bg-slate-700 outline-none appearance-none"
              placeholder="Search here ..."
            />
            <i className="fi-rr-search absolute right-2 top-2"></i>
          </div>
        )}
      </div>
      <table className="w-full table-auto text-left shadow">
        <thead>
          <tr className="bg-white dark:bg-slate-900 uppercase text-xs font-poppins">
            {columns.map((column) => (
              <th key={column.title} className="p-2 first:pl-4 last:pr-4">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        {!isLoading && localData?.length > 0 ? (
          <tbody>
            {localData &&
              localData
                .slice(indexOfFirstItem, indexOfLastItem)
                .map((item, index) => (
                  <tr
                    className=" bg-white odd:bg-blue-50 hover:bg-blue-200 dark:bg-slate-700 dark:odd:bg-slate-800 dark:hover:bg-slate-600"
                    key={`tr-${index}`}
                  >
                    {columns.map((column, indexColumn) => {
                      let toShown = item[column.key];
                      if (column.render) toShown = column.render(item);
                      if (column.dataType === "numbering") {
                        toShown = (selectedPage - 1) * perPage + index + 1;
                      }
                      if (column.dataType === "date") {
                        toShown = dateFormater(item[column.key]);
                      }
                      if (
                        column.dataType === "number" ||
                        column.dataType === "currency"
                      ) {
                        toShown = item[column.key].toLocaleString("id-ID");
                      }
                      return (
                        <td
                          key={`tr-${index}-td-${indexColumn}`}
                          className="p-2 first:pl-4 last:pr-4"
                        >
                          {toShown}
                        </td>
                      );
                    })}
                  </tr>
                ))}
          </tbody>
        ) : (
          <tbody>
            <tr
              className="leading-relaxed bg-white odd:bg-blue-50 hover:bg-blue-100 dark:bg-slate-900 dark:odd:bg-slate-800 dark:hover:bg-slate-700"
              key={"no-data"}
            >
              <td colSpan={columns.length} className="p-2 w-full text-center">
                <div className="flex flex-col items-center justify-center gap-3 py-2">
                  <Image
                    alt="No data image"
                    src={"/no_data.svg"}
                    width={100}
                    height={300}
                  />
                  <span>No data.</span>
                </div>
              </td>
            </tr>
          </tbody>
        )}
      </table>

      <Pagination
        data={localData}
        itemsPerPage={perPage}
        currentPage={selectedPage}
        setCurrentPage={setSelectedPage}
      />
    </section>
  );
};

export default Table;

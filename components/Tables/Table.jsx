import React, { useState } from "react";

const Table = ({ columns, data, query }) => {
  const [pageSize, setPageSize] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const filterData = (query) => {
    return data?.filter((item) => {
      const values = Object.values(item);

      for (const value of values) {
        if (
          typeof value === "string" &&
          value.toLowerCase().includes(query?.toLowerCase())
        ) {
          return true;
        }
      }

      return false;
    });
  };

  let filtered = filterData(query);

  const paginateData = (data, page, pageSize) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  };

  const pageNumbers = Array.from(
    { length: Math.ceil(filtered?.length / pageSize) },
    (_, i) => i + 1
  );

  return (
    <section className="z-10 overflow-x-auto w-full rounded-lg shadow-lg bg-blue-50 dark:bg-slate-800 dark:shadow-blue-700">
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="bg-white dark:bg-slate-800 uppercase text-xs font-poppins">
            {columns.map((column) => (
              <th key={column.title} className="p-2 first:pl-4 last:pr-4">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        {data?.length > 0 ? (
          <tbody>
            {paginateData(filtered, currentPage, pageSize)?.map((item) => (
              <tr
                className=" bg-white odd:bg-blue-50 hover:bg-blue-100 dark:bg-slate-800 dark:odd:bg-slate-900 dark:hover:bg-slate-700"
                key={item.id}
              >
                {columns.map((column, index) => {
                  let toShown = item[column.key];
                  if (column.render) toShown = column.render(item, index);
                  return (
                    <td key={index} className="p-2 first:pl-4 last:pr-4">
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
              className="leading-relaxed bg-white odd:bg-blue-50 hover:bg-blue-100 dark:bg-slate-800 dark:odd:bg-slate-900 dark:hover:bg-slate-700"
              key={0}
            >
              <td colSpan={columns.length} className="p-2 w-full text-center">
                No Data
              </td>
            </tr>
          </tbody>
        )}
      </table>

      <div className="flex gap-2 p-4">
        <button
          disabled={currentPage == 1}
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          className={`disabled:cursor-not-allowed p-2 w-8 h-8 text-xs rounded-lg shadow-lg bg-white dark:bg-slate-700 `}
        >
          <i className="fi-rr-angle-left"></i>
        </button>
        {pageNumbers.map((item) => (
          <button
            key={item}
            onClick={() => setCurrentPage(item)}
            className={`p-2 w-8 h-8 text-xs rounded-lg shadow-lg   ${
              item === currentPage
                ? "bg-primary text-white dark:shadow-primary"
                : "bg-white dark:bg-slate-700"
            }`}
          >
            {item}
          </button>
        ))}
        <button
          disabled={currentPage == pageNumbers.length}
          onClick={() =>
            currentPage < pageNumbers.length && setCurrentPage(currentPage + 1)
          }
          className={`disabled:cursor-not-allowed p-2 w-8 h-8 text-xs rounded-lg shadow-lg bg-white dark:bg-slate-700 `}
        >
          <i className="fi-rr-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Table;

import React from "react";

const Table = ({ columns, data }) => {
  return (
    <section className="z-10 overflow-x-auto w-full rounded-lg shadow-lg dark:shadow-blue-700">
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="bg-white dark:bg-slate-800 uppercase text-xs">
            {columns.map((column) => (
              <th key={column.title} className="p-2 first:pl-4 last:pr-4">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        {data?.length > 0 ? (
          <tbody>
            {data?.map((item) => (
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
    </section>
  );
};

export default Table;

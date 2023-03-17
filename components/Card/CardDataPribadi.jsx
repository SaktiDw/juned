import React from "react";

const CardDataPribadi = ({ title, children, data }) => {
  return (
    <div className="flex flex-col gap-2 dark:text-white w-full h-full">
      <span className="text-sm uppercase font-bold drop-shadow-lg shadow-white">
        {title}
      </span>
      <div className="relative w-full h-full flex flex-col gap-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl hover:scale-105 hover:z-10 duration-200 ease-in-out p-4">
        <button className="absolute -right-2 -top-2 z-10 p-2 rounded-full shadow-lg bg-white dark:bg-slate-800 w-8 h-8 text-sm text-blue-500  hover:scale-125 duration-200 ease-in-out">
          <i className="fi-rr-pencil"></i>
        </button>
        {children}
        <div className="flex flex-col divide-y">
          {data &&
            data.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-center py-2"
              >
                <h4 className="text-xs text-slate-600 dark:text-slate-400 font-semibold uppercase leading-none">
                  {item.title}
                </h4>
                <span className="text-xl font-bold leading-tight">
                  {(item.text ||= "tidak ada")}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardDataPribadi;

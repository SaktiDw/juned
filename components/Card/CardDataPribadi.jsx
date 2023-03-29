import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CardDataPribadi = ({ title, children, data, editLink }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 dark:text-white w-full h-full">
      <h1 className="text-md uppercase font-semibold drop-shadow-lg shadow-white">
        {title}
      </h1>
      <div className="relative w-full h-full flex flex-col gap-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl hover:scale-105 hover:z-10 duration-200 ease-in-out p-4">
        <Link
          // onClick={() => router.push("/data-pribadi/edit-biodata")}
          href={`/data-pribadi/${editLink}`}
          className="group flex items-center absolute -right-2 -top-2 z-10 p-2 rounded-full shadow-lg bg-primary dark:bg-slate-800 w-8 h-8 text-white "
        >
          <i className="fi-rr-pencil pt-1"></i>
          <div className="invisible group-hover:visible group-hover:absolute right-full flex gap-2 mr-2 items-center shadow-lg">
            <div class="absolute left-full w-0 h-0 border-4 border-transparent border-b-4 border-l-4 border-l-primary"></div>
            <span className="text-xs p-1 px-2 w-max bg-primary rounded-md shadow-lg">
              Ubah data
            </span>
          </div>
        </Link>

        {children}

        <div className="flex flex-col divide-y">
          {data &&
            data.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-center py-2"
              >
                <h4 className="text-sm text-slate-600 dark:text-slate-400 font-semibold uppercase leading-none">
                  {item.title}
                </h4>
                <span className="text-sm font-bold leading-tight">
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

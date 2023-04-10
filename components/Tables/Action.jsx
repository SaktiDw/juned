import Link from "next/link";
import { Router } from "next/router";
import React from "react";

const Action = ({
  param,
  action = ["delete", "edit", "detail", "add-document"],
  baseUrl,
}) => {
  return (
    <>
      <div className="flex items-center gap-2">
        {action.includes("delete") && (
          <button
            onClick={() => mutate(param.id)}
            className="relative flex justify-center p-1 text-red-500 rounded-xl text-md group"
          >
            <i className="fi-rr-trash"></i>
            <span className="absolute bottom-full bg-white dark:bg-slate-900 font-bold w-max shadow-md px-4 text-xs rounded-xl hidden group-hover:flex">
              Delete
            </span>
          </button>
        )}
        {action.includes("edit") && (
          <button
            onClick={() => mutate(param.id)}
            className="relative flex justify-center p-1 text-purple-500 rounded-xl text-md group"
          >
            <i className="fi-rr-pencil"></i>
            <span className="absolute bottom-full bg-white dark:bg-slate-900 font-bold w-max shadow-md px-4 text-xs rounded-xl hidden group-hover:flex">
              Edit
            </span>
          </button>
        )}
        {action.includes("detail") && (
          <Link
            href={`${baseUrl}/${param.id}`}
            className="relative flex justify-center p-1 text-green-500 rounded-xl text-md group"
          >
            <i className="fi-rr-info"></i>
            <span className="absolute bottom-full bg-white dark:bg-slate-900 font-bold w-max shadow-md px-4 text-xs rounded-xl hidden group-hover:flex">
              Detail
            </span>
          </Link>
        )}
        {action.includes("add-document") && (
          <button
            onClick={() => mutate(param.id)}
            className="relative flex justify-center p-1 text-primary rounded-xl text-md group"
          >
            <i className="fi-rr-document"></i>
            <span className="absolute bottom-full bg-white dark:bg-slate-900 font-bold w-max shadow-md px-4 text-xs rounded-xl hidden group-hover:flex">
              Tambah dokumen
            </span>
          </button>
        )}
        {/* <Link href={`/${param.id}`}>Link</Link> */}
      </div>
    </>
  );
};

export default Action;

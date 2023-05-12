import Link from "next/link";
import { Router } from "next/router";
import React from "react";
import Swal from "sweetalert2";

const Action = ({
  param,
  action = ["delete", "edit", "detail", "add-document"],
  baseUrl,
  deleteFn,
  addDocumentFn,
}) => {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        {action.includes("edit-bidang-ilmu") && (
          <Link
            href={`${baseUrl}/${param.id}/edit-bidang-ilmu`}
            className="relative flex justify-center p-1 text-indigo-500 rounded-xl text-lg group"
          >
            <i className="fi-rr-edit"></i>
            <span className="absolute bottom-full bg-white dark:bg-slate-900 font-bold w-max shadow-md px-4 text-xs rounded-xl hidden group-hover:flex">
              Edit Bidang Ilmu
            </span>
          </Link>
        )}
        {action.includes("delete") && (
          <button
            onClick={() =>
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.isConfirmed) {
                  deleteFn;
                  Swal.fire(
                    "Deleted!",
                    "Your file has been deleted.",
                    "success"
                  );
                }
              })
            }
            className="relative flex justify-center p-1 text-red-500 rounded-xl text-lg group"
          >
            <i className="fi-rr-trash"></i>
            <span className="absolute bottom-full bg-white dark:bg-slate-900 font-bold w-max shadow-md px-4 text-xs rounded-xl hidden group-hover:flex">
              Delete
            </span>
          </button>
        )}
        {action.includes("edit") && (
          <Link
            href={`${baseUrl}/${param.id}/edit`}
            className="relative flex justify-center p-1 text-purple-500 rounded-xl text-lg group"
          >
            <i className="fi-rr-pencil"></i>
            <span className="absolute bottom-full bg-white dark:bg-slate-900 font-bold w-max shadow-md px-4 text-xs rounded-xl hidden group-hover:flex">
              Edit
            </span>
          </Link>
        )}
        {action.includes("detail") && (
          <Link
            href={`${baseUrl}/${param.id}`}
            className="relative flex justify-center p-1 text-green-500 rounded-xl text-lg group"
          >
            <i className="fi-rr-info"></i>
            <span className="absolute bottom-full bg-white dark:bg-slate-900 font-bold w-max shadow-md px-4 text-xs rounded-xl hidden group-hover:flex">
              Detail
            </span>
          </Link>
        )}
        {action.includes("add-document") && (
          <button
            onClick={addDocumentFn}
            className="relative flex justify-center p-1 text-primary rounded-xl text-lg group"
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

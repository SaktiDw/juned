import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Breadcrumbs = () => {
  const router = useRouter();
  const path = router.asPath.split("/").filter((x) => x);
  return (
    <ul className="flex gap-2 items-center text-xs">
      <li>
        <Link href="/">Home</Link>
      </li>
      {path.map((part, index) => {
        const url = `/${path.slice(0, index + 1).join("/")}`;
        // const label = part.charAt(0).toUpperCase() + part.slice(1);
        const words = part
          .split("-")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1));
        const result = words.join(" ");

        return (
          <div key={url} className="flex items-center gap-2">
            <i className="pt-1 fi-rr-angle-small-right"></i>
            <button
              className="disabled:text-slate-500 disabled:cursor-not-allowed truncate w-20 sm:w-max"
              // disabled={path.length == index + 1}
              key={url}
              onClick={() => router.push(url)}
            >
              {result}
            </button>
          </div>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;

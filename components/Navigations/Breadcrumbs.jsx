import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Breadcrumbs = () => {
  const router = useRouter();
  const splitedPath = router.asPath
    .split("/")
    .filter((item) => item.length > 0);
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex justify-center items-center capitalize relative">
        <Link href={"/"}>Beranda</Link>
        <i className="fi-rr-angle-small-right absolute top-1 left-full"></i>
      </div>
      {splitedPath.map((item) => (
        <div
          key={item}
          className="flex justify-center items-center capitalize relative"
        >
          <Link href={`/${item}`}>{item}</Link>
          <i className="fi-rr-angle-small-right absolute top-1 left-full"></i>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;

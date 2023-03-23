import { useRouter } from "next/router";
import React from "react";
import { Breadcrumbs } from "..";

const Nav = ({ title }) => {
  return (
    <nav className="w-full flex items-center gap-2 h-14">
      {/* <i className="fi-rr-menu-burger"></i>
        <button className='ml-auto'>Pengaturan</button>
        <button>Pengaturan</button> */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold capitalize ">{title}</h1>
        <Breadcrumbs />
      </div>
    </nav>
  );
};

export default Nav;

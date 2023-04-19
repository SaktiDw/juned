import { useRouter } from "next/router";
import React from "react";
import { Breadcrumbs } from "..";
import { useQuery } from "@tanstack/react-query";
import { fetchProfil } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";

const Nav = ({ title }) => {
  const { data } = useQuery({
    queryKey: ["profil", id],
    queryFn: async () => await fetchProfil(id),
  });
  return (
    <nav className="w-full flex items-baseline justify-between gap-2 h-14">
      {/* <i className="fi-rr-menu-burger"></i>
        <button className='ml-auto'>Pengaturan</button>
        <button>Pengaturan</button> */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold capitalize ">{title}</h1>
        <Breadcrumbs />
      </div>

      <h1 className="text-xl capitalize font-bold">
        {data && data.nama.toLowerCase()}
      </h1>
    </nav>
  );
};

export default Nav;

import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { SidebarItem } from "..";

const Sidebar = () => {
  const router = useRouter();
  return (
    <>
      <aside className="p-2 px-4 max-h-screen h-screen overflow-y-auto flex flex-col items-center gap-2 w-[300px] bg-slate-200 dark:bg-slate-900 bg-opacity-50 backdrop-blur-lg z-10">
        <Image alt="" src={"/logo itk png.png"} width={300} height={200} />
        <h1>Sistem Informasi</h1>
        <h1>Sister</h1>
        <SidebarItem
          active={router.pathname === "/profile/*"}
          title="Profile"
          href="/"
          icon={"fi-rr-user"}
          subitem={[
            {
              link: "/profile/data-pribadi",
              title: "Data Pribadi",
              active: true,
            },
            { link: "/", title: "Inpassing", active: false },
            { link: "/", title: "Jabatan Fungsional", active: false },
            { link: "/", title: "Kepangkatan", active: false },
            { link: "/", title: "Penempatan", active: false },
          ]}
        />
        <SidebarItem
          active={false}
          title="Pelaks. Pendidikan"
          href="/"
          icon={"fi-rr-books"}
          subitem={[
            { link: "/", title: "Pengajaran", active: false },
            { link: "/", title: "Bimbingan Mahasiswa", active: false },
            { link: "/", title: "Pengujian Mahasiswa", active: false },
            { link: "/", title: "Visiting Scientist", active: false },
            { link: "/", title: "Pembinaan Mahasiswa", active: false },
            { link: "/", title: "Bahan Ajar", active: false },
            { link: "/", title: "Datasering", active: false },
            { link: "/", title: "Orasi Ilmiah", active: false },
            { link: "/", title: "Pembimbing Dosen", active: false },
            { link: "/", title: "Tugas Tambahan", active: false },
          ]}
        />
        <SidebarItem
          active={false}
          title="Pelaks. Penelitian"
          href="/"
          icon={"fi-rr-test-tube"}
          subitem={[
            { link: "/", title: "Penelitian", active: false },
            { link: "/", title: "Publikasi Karya", active: false },
            { link: "/", title: "Paten/HKI", active: false },
          ]}
        />
        <SidebarItem
          active={false}
          title="Pelaks. Pengabdian"
          href="/"
          icon={"fi-rr-link-alt"}
          subitem={[
            { link: "/", title: "Pengabdian", active: false },
            { link: "/", title: "Pengelola Jurnal", active: false },
            { link: "/", title: "Pembicara", active: false },
            { link: "/", title: "Jabatan Struktural", active: false },
          ]}
        />
        <div className="w-full p-2 mt-auto bg-blue-500">Tegar Pal</div>
      </aside>
    </>
  );
};

export default Sidebar;

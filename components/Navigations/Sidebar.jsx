import useToggle from "@/helper/hooks/useToggle";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { Dropdown, SidebarItem } from "..";

const Sidebar = () => {
  const router = useRouter();
  // const { toggle, toggler, setToggle } = useToggle();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const ref = useRef(null);

  const handleDropdownClick = (index) => {
    index === activeDropdown
      ? setActiveDropdown(null)
      : setActiveDropdown(index);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setActiveDropdown(null);
      // setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <aside
        className="p-2 pl-4 pr-6 max-h-screen h-screen overflow-y-auto flex flex-col items-center gap-4 w-[320px] bg-slate-200 dark:bg-slate-900 bg-opacity-50 backdrop-blur-2xl dark:bg-opacity-50 dark:backdrop-blur-2xl z-10"
        ref={ref}
      >
        <Image alt="" src={"/logo itk png.png"} width={300} height={200} />
        <h1>Sistem Informasi</h1>
        <h1>Sister</h1>
        <Dropdown
          index={1}
          isActive={activeDropdown === 1}
          onClick={handleDropdownClick}
          active={router.pathname === "/profile/*"}
          title="Profile"
          href="/"
          icon={"fi-rr-user"}
          subItem={[
            {
              link: "/profile/data-pribadi",
              title: "Data Pribadi",
              active: true,
            },
            { link: "/profile/inpassing", title: "Inpassing", active: false },
            {
              link: "/profile/jabatan-fungsional",
              title: "Jabatan Fungsional",
              active: false,
            },
            {
              link: "/profile/kepangkatan",
              title: "Kepangkatan",
              active: false,
            },
            { link: "/profile/penempatan", title: "Penempatan", active: false },
          ]}
        />
        <Dropdown
          index={2}
          isActive={activeDropdown === 2}
          onClick={handleDropdownClick}
          active={false}
          title="Pelaks. Pendidikan"
          href="/"
          icon={"fi-rr-books"}
          subItem={[
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
        <Dropdown
          index={3}
          isActive={activeDropdown === 3}
          onClick={handleDropdownClick}
          active={false}
          title="Pelaks. Penelitian"
          href="/"
          icon={"fi-rr-test-tube"}
          subItem={[
            { link: "/", title: "Penelitian", active: false },
            { link: "/", title: "Publikasi Karya", active: false },
            { link: "/", title: "Paten/HKI", active: false },
          ]}
        />
        <Dropdown
          index={4}
          isActive={activeDropdown === 4}
          onClick={handleDropdownClick}
          active={false}
          title="Pelaks. Pengabdian"
          href="/"
          icon={"fi-rr-link-alt"}
          subItem={[
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

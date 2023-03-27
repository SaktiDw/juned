import { DarkModeContext } from "@/helper/context/DarkModeContext";
import useDarkMode from "@/helper/hooks/useDarkMode";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
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

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <aside
        className="p-2 pl-4 pr-6 max-h-screen h-screen overflow-y-auto flex flex-col items-center gap-4 w-[320px] bg-slate-200 dark:bg-slate-900 bg-opacity-50 backdrop-blur-2xl dark:bg-opacity-50 dark:backdrop-blur-2xl z-10"
        ref={ref}
      >
        <Image alt="" src={"/logo itk png.png"} width={300} height={200} />
        <h1 className="font-quicksand">Sistem Informasi</h1>
        <h1 className="font-poppins">Sister</h1>

        <Dropdown
          index={1}
          isActive={activeDropdown === 1}
          onClick={handleDropdownClick}
          active={router.pathname.includes("profile")}
          title="Profile"
          href="/"
          icon={"fi-rr-user"}
          subItem={[
            {
              link: "/profile/data-pribadi",
              title: "Data Pribadi",
              active: router.pathname.includes("data-pribadi"),
            },
            {
              link: "/profile/inpassing",
              title: "Inpassing",
              active: router.pathname.includes("inpassing"),
            },
            {
              link: "/profile/jabatan-fungsional",
              title: "Jabatan Fungsional",
              active: router.pathname.includes("jabatan-fungsional"),
            },
            {
              link: "/profile/kepangkatan",
              title: "Kepangkatan",
              active: router.pathname.includes("kepangkatan"),
            },
            {
              link: "/profile/penempatan",
              title: "Penempatan",
              active: router.pathname.includes("penemapatan"),
            },
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
            {
              link: "/thridarma/pengajaran",
              title: "Pengajaran",
              active: false,
            },
            {
              link: "/thridarma/bimbingan_mahasiswa",
              title: "Bimbingan Mahasiswa",
              active: false,
            },
            {
              link: "/thridarma/pengujian_mahasiswa",
              title: "Pengujian Mahasiswa",
              active: false,
            },
            {
              link: "/thridarma/visiting_scientist",
              title: "Visiting Scientist",
              active: false,
            },
            {
              link: "/thridarma/pembinaan_mahasiswa",
              title: "Pembinaan Mahasiswa",
              active: false,
            },
            {
              link: "/thridarma/bahan_ajar",
              title: "Bahan Ajar",
              active: false,
            },
            {
              link: "/thridarma/datasering",
              title: "Datasering",
              active: false,
            },
            {
              link: "/thridarma/orasi_ilmiah",
              title: "Orasi Ilmiah",
              active: false,
            },
            {
              link: "/thridarma/pembimbing_dosen",
              title: "Pembimbing Dosen",
              active: false,
            },
            {
              link: "/thridarma/tugas_tambahan",
              title: "Tugas Tambahan",
              active: false,
            },
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
        <div className="w-full flex justify-around items-center p-4 mt-auto rounded-lg shadow-2xl dark:shadow-primary bg-primary dark:bg-opacity-80 backdrop-blur-lg text-white font-semibold">
          <button onClick={() => null}>
            <i className="fi-rr-user"></i> Tegar Pal
          </button>
          <button
            className="flex gap-2 items-center"
            onClick={() => toggleDarkMode()}
          >
            <i className={darkMode ? "fi-rr-moon" : "fi-rr-sun"}></i>
            {darkMode ? "Dark" : "Light"}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

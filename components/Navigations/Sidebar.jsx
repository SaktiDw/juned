import { DarkModeContext } from "@/helper/context/DarkModeContext";
import useDarkMode from "@/helper/hooks/useDarkMode";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Dropdown, SidebarItem } from "..";
import Link from "next/link";

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
        <Link href={"/"}>
          <Image alt="" src={"/logo itk png.png"} width={300} height={200} />
        </Link>
        <div className="flex flex-col itemc-center justify-center text-center">
          <h1 className="font-poppins">Sistem Informasi</h1>
          <h1 className="font-quicksand font-semibold text-primary text-xl ">
            Sister
          </h1>
        </div>

        <Dropdown
          index={1}
          isOpen={activeDropdown === 1}
          onClick={handleDropdownClick}
          active={[
            "/data-pribadi",
            "/inpassing",
            "/jabatan-fungsional",
            "/kepangkatan",
            "/penemapatan",
          ].includes(router.pathname)}
          title="Profile"
          href="/"
          icon={"fi-rr-user"}
          subItem={[
            {
              link: "/data-pribadi",
              title: "Data Pribadi",
              active: router.pathname.includes("data-pribadi"),
            },
            {
              link: "/inpassing",
              title: "Inpassing",
              active: router.pathname.includes("inpassing"),
            },
            {
              link: "/jabatan-fungsional",
              title: "Jabatan Fungsional",
              active: router.pathname.includes("jabatan-fungsional"),
            },
            {
              link: "/kepangkatan",
              title: "Kepangkatan",
              active: router.pathname.includes("kepangkatan"),
            },
            {
              link: "/penempatan",
              title: "Penempatan",
              active: router.pathname.includes("penemapatan"),
            },
          ]}
        />
        <Dropdown
          index={2}
          isOpen={activeDropdown === 2}
          onClick={handleDropdownClick}
          active={[
            "/pengajaran",
            "/bimbingan-mahasiswa",
            "/pengujian-mahasiswa",
            "/visiting-scientist",
            "/pembinaan-mahasiswa",
            "/bahan-ajar",
            "/datasering",
            "/orasi-ilmiah",
            "/pembimbing-dosen",
            "/tugas-tambahan",
          ].includes(router.pathname)}
          title="Pelaks. Pendidikan"
          href="/"
          icon={"fi-rr-books"}
          subItem={[
            {
              link: "/pengajaran",
              title: "Pengajaran",
              active: false,
            },
            {
              link: "/bimbingan-mahasiswa",
              title: "Bimbingan Mahasiswa",
              active: false,
            },
            {
              link: "/pengujian-mahasiswa",
              title: "Pengujian Mahasiswa",
              active: false,
            },
            {
              link: "/visiting-scientist",
              title: "Visiting Scientist",
              active: false,
            },
            {
              link: "/pembinaan-mahasiswa",
              title: "Pembinaan Mahasiswa",
              active: false,
            },
            {
              link: "/bahan-ajar",
              title: "Bahan Ajar",
              active: false,
            },
            {
              link: "/datasering",
              title: "Datasering",
              active: false,
            },
            {
              link: "/orasi-ilmiah",
              title: "Orasi Ilmiah",
              active: false,
            },
            {
              link: "/pembimbing-dosen",
              title: "Pembimbing Dosen",
              active: false,
            },
            {
              link: "/tugas-tambahan",
              title: "Tugas Tambahan",
              active: false,
            },
          ]}
        />
        <Dropdown
          index={3}
          isOpen={activeDropdown === 3}
          onClick={handleDropdownClick}
          active={["/penelitian", "/publikasi", "/paten"].includes(
            router.pathname
          )}
          title="Pelaks. Penelitian"
          href="/"
          icon={"fi-rr-test-tube"}
          subItem={[
            { link: "/penelitian", title: "Penelitian", active: false },
            { link: "/publikasi", title: "Publikasi Karya", active: false },
            { link: "/paten", title: "Paten/HKI", active: false },
          ]}
        />
        <Dropdown
          index={4}
          isOpen={activeDropdown === 4}
          onClick={handleDropdownClick}
          active={[
            "/pengabdian",
            "/pengelola-jurnal",
            "/pembicara",
            "/jabatan-struktural",
          ].includes(router.pathname)}
          title="Pelaks. Pengabdian"
          href="/"
          icon={"fi-rr-link-alt"}
          subItem={[
            { link: "/pengabdian", title: "Pengabdian", active: false },
            {
              link: "/pengelola-jurnal",
              title: "Pengelola Jurnal",
              active: false,
            },
            { link: "/pembicara", title: "Pembicara", active: false },
            {
              link: "/jabatan-struktural",
              title: "Jabatan Struktural",
              active: false,
            },
          ]}
        />
        <Dropdown
          index={5}
          isOpen={activeDropdown === 5}
          onClick={handleDropdownClick}
          active={[
            "/anggota-profesi",
            "/penghargaan",
            "/penunjang-lain",
          ].includes(router.pathname)}
          title="Penunjang"
          href="/"
          icon={"fi-rr-diploma"}
          subItem={[
            {
              link: "/anggota-profesi",
              title: "Anggota Profesi",
              active: false,
            },
            { link: "/penghargaan", title: "Penghargaan", active: false },
            { link: "/penunjang-lain", title: "Penunjang Lain", active: false },
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

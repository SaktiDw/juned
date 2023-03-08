import Image from "next/image";
import React from "react";
import Nav from "../Navigations/Nav";
import Sidebar from "../Navigations/Sidebar";

const MainLayout = (props) => {
  return (
    <>
      <main className="flex bg-slate-200 dark:bg-slate-900 dark:text-white">
        <Sidebar />
        <Image
          alt=""
          src={"/logo itk png.png"}
          width={600}
          height={400}
          className="fixed -z-0 -left-80"
        />
        <Image
          alt=""
          src={"/logo itk png.png"}
          width={800}
          height={600}
          className="fixed -z-0 left-1/3"
        />
        <section className="flex flex-col w-full max-h-screen overflow-y-auto py-4 px-8 bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-white bg-opacity-50 backdrop-blur-2xl dark:bg-opacity-50 dark:backdrop-blur-2xl  z-10">
          {/* <Nav /> */}
          {props.children}
        </section>
      </main>
    </>
  );
};

export default MainLayout;

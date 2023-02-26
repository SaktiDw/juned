import Image from "next/image";
import React from "react";
import Nav from "../Navigations/Nav";
import Sidebar from "../Navigations/Sidebar";

const MainLayout = (props) => {
  return (
    <>
      <main className="flex max-h-screen overflow-y-auto bg-slate-200 dark:bg-slate-900 dark:text-white">
        <Sidebar />
        <Image
          alt=""
          src={"/logo itk png.png"}
          width={600}
          height={400}
          className="fixed -z-0 -left-80"
        />
        <section className="flex-col w-full max-h-screen overflow-y-auto py-2 px-8 bg-slate-200 dark:bg-slate-900 bg-opacity-50 backdrop-blur-lg z-10">
          {/* <Nav /> */}
          {props.children}
        </section>
      </main>
    </>
  );
};

export default MainLayout;

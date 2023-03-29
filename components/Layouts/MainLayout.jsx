import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Nav from "../Navigations/Nav";
import Sidebar from "../Navigations/Sidebar";

const MainLayout = (props) => {
  const ref = useRef(null);
  return (
    <>
      <section className="flex bg-slate-200 dark:bg-slate-900 dark:text-white relative">
        <button
          onClick={() => ref.current?.scrollIntoView({ behavior: "smooth" })}
          className={`absolute animate-bounce bottom-0 right-0 z-50 rounded-full bg-primary text-white w-10 h-10 m-4 `}
        >
          <i className="fi-rr-angle-small-up"></i>
        </button>
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
        <section className="relative flex flex-col w-full max-h-screen overflow-y-auto overflow-x-hidden py-4 px-8 bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-white bg-opacity-50 backdrop-blur-2xl dark:bg-opacity-50 dark:backdrop-blur-2xl  z-10">
          {/* <Nav /> */}
          <div ref={ref} className="invisible absoulte top-0" id="top"></div>
          {props.children}
        </section>
      </section>
    </>
  );
};

export default MainLayout;

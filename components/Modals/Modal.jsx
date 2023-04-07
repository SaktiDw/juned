import React, { useState } from "react";

const Modal = ({ isOpen, setIsOpen, title, children }) => {
  const handleClose = () => setIsOpen(!isOpen);
  if (!isOpen) return <></>;
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full min-h-screen  flex flex-col items-center justify-center">
      <div className="relative min-w-300 lg:w-1/2 min-h-300 bg-white dark:bg-slate-800 dark:text-white rounded-xl z-10 py-4 px-8 m-8 flex flex-col gap-4 overflow-auto">
        <i
          className=" fi-rr-cross absolute top-4 right-4 text-red-500 cursor-pointer"
          onClick={handleClose}
        ></i>
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="">{children}</div>
      </div>
      <div
        className="bg-slate-900/50 backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 w-full min-h-screen overflow-y-auto"
        onClick={handleClose}
      ></div>
    </div>
  );
};

export default Modal;

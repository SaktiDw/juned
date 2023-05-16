import {
  FormCreateBahanAjar,
  MainLayout,
  Nav,
  TabRiwayatAjuanPerubahanData,
} from "@/components";
import React from "react";

const BahanAjarCreate = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Bahan Ajar"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold uppercase">
            Form Tambah Bahan Ajar
          </h1>
          <div className="grid grid-flow-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <FormCreateBahanAjar />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BahanAjarCreate;

import {
  FormEditBidangKeilmuan,
  MainLayout,
  Nav,
  TabRiwayatAjuanPerubahanData,
} from "@/components";
import React from "react";

const EditBidangKeilmuan = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Edit Bidang Keilmuan"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-lg">Form Ajuan Perubahan Data Bidang Keilmuan</h1>
          <div className="grid grid-flow-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <FormEditBidangKeilmuan />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EditBidangKeilmuan;

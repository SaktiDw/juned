import { MainLayout, Nav } from "@/components";
import React from "react";

const DetailPengajaran = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full">
        <Nav title={"Edit Pengajaran"} />
      </div>
    </MainLayout>
  );
};

export default DetailPengajaran;

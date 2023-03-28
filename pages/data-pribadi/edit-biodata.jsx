import {
  CardDataPribadi,
  FormEditBiodata,
  Input,
  MainLayout,
  Nav,
  Tab,
  UploadFile,
} from "@/components";
import TabRiwayatAjuanPerubahanDataProfil from "@/components/Tabs/TabRiwayatAjuanPerubahanDataProfil";
import { fetchProfil } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const EditBiodata = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Edit Biodata"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-lg">Form Ajuan Perubahan Data Profil</h1>
          <div className="grid grid-flow-col gap-4">
            <FormEditBiodata />
          </div>
        </div>
        <TabRiwayatAjuanPerubahanDataProfil />
      </div>
    </MainLayout>
  );
};

export default EditBiodata;

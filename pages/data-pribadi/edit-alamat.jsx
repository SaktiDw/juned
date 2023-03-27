import {
  CardDataPribadi,
  FormEditBiodata,
  Input,
  MainLayout,
  Nav,
} from "@/components";
import { fetchProfil } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const EditBiodata = () => {
  const { data: profil } = useQuery({
    queryKey: ["profil"],
    queryFn: async () => await fetchProfil(id),
  });
  return (
    <div>
      <div className="flex flex-col gap-8 px-8">
        <Nav title={"Edit Biodata"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1>Form Ajuan Perubahan Data Profil</h1>
          <div className="grid grid-flow-col gap-4">
            <FormEditBiodata />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBiodata;

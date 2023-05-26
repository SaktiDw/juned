import {
  FormCreateKepangkatan,
  MainLayout,
  Nav,
  TabRiwayatAjuanPerubahanData,
} from "@/components";
import { fetchDetailKepangkatan } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const KepangkatanEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: Kepangkatan,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["Kepangkatan"],
    queryFn: () => fetchDetailKepangkatan(id),
    networkMode: "offlineFirst",
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Ubah Riwayat Golongan/Pangkat"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold capitalize">
            Form Edit Riwayat Golongan/Pangkat
          </h1>
          <div className="grid grid-flow-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            {isLoading ? (
              "Memuat..."
            ) : (
              <FormCreateKepangkatan key={1} initialValues={Kepangkatan.data} />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default KepangkatanEdit;

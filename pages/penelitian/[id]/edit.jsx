import { FormCreatePenelitian, MainLayout, Nav } from "@/components";
import { fetchDetailPenelitian } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const PenelitianEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: penelitian,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["penelitian", id],
    queryFn: () => fetchDetailPenelitian(id),
    networkMode: "offlineFirst",
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Edit Penelitian"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold uppercase">Form Edit Penelitian</h1>
          <div className="grid grid-flow-col gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <FormCreatePenelitian initialValues={penelitian?.data} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PenelitianEdit;

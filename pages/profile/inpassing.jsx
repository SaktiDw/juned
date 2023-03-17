import { Action, MainLayout, Table } from "@/components";
import { fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const inpassing = () => {
  const {
    data: inpassing,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["inpassing"],
    queryFn: () => fetchListInpassing(),
  });

  return (
    <MainLayout>
      <div className="flex flex-col gap-2 dark:text-white w-full h-full">
        <h1 className="text-xs uppercase font-bold drop-shadow-lg shadow-white">
          Inpassing
        </h1>
        <button className="flex items-center justify-center gap-2 py-2 px-4 bg-primary rounded-md shadow-xl w-32 text-white">
          <i className="fi-rr-plus"></i> Tambah
        </button>
        <Table
          columns={[
            { key: "id", title: "No." },
            { key: "pangkat_golongan", title: "Pangkat/Golongan" },
            { key: "sk", title: "Nomor SK" },
            { key: "tanggal_sk", title: "Tanggal SK" },
            {
              key: "terhitung_mulai_tanggal",
              title: "Terhitung Mulai Tanggal",
            },
            {
              key: "id",
              title: "Action",
              render: (val) => <Action param={val} />,
            },
          ]}
          data={inpassing?.data}
        />
      </div>
    </MainLayout>
  );
};

export default inpassing;

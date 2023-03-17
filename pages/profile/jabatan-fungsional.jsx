import { Action, MainLayout, Table } from "@/components";
import { fetchListJabatanFungsional } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const JabatanFungsional = () => {
  const {
    data: jabatan_fungsional,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["jabatan_fungsional"],
    queryFn: () => fetchListJabatanFungsional(),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-2 dark:text-white w-full h-full">
        <h1 className="text-xs uppercase font-bold drop-shadow-lg shadow-white">
          Riwayat Jabatan Fungsional
        </h1>
        <div className="flex justify-between">
          <button className="flex items-center justify-center gap-2 py-2 px-4 bg-primary rounded-md shadow-xl  text-white">
            <i className="fi-rr-plus"></i> Tambah
          </button>
          <button className="flex items-center justify-center gap-2 py-2 px-4 bg-primary rounded-md shadow-xl text-white">
            <i className="fi-rr-plus"></i> Riwayat Ajuan Perubahan
          </button>
        </div>
        <Table
          columns={[
            { key: "id", title: "No." },
            { key: "jabatan_fungsional", title: "Jabatan Fungsional" },
            { key: "sk", title: "Nomor SK" },
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
          data={jabatan_fungsional?.data}
        />
      </div>
    </MainLayout>
  );
};

export default JabatanFungsional;

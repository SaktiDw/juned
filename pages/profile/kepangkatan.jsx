import { Action, MainLayout, Table } from "@/components";
import { fetchListKepangkatan } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Kepangkatan = () => {
  const {
    data: Kepangkatan,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["Kepangkatan"],
    queryFn: () => fetchListKepangkatan(),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-2 dark:text-white w-full h-full">
        <span className="text-xs uppercase font-bold drop-shadow-lg shadow-white">
          Riwayat Golongan/Pangkat
        </span>
        <div className="flex justify-between">
          <button className="flex items-center justify-center gap-2 py-2 px-4 bg-blue-700 rounded-md shadow-xl  text-white">
            <i className="fi-rr-plus"></i> Tambah
          </button>
          <button className="flex items-center justify-center gap-2 py-2 px-4 bg-blue-700 rounded-md shadow-xl text-white">
            <i className="fi-rr-plus"></i> Riwayat Ajuan Perubahan
          </button>
        </div>
        <Table
          columns={[
            { key: "id", title: "No." },
            ,
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
          data={Kepangkatan?.data}
        />
      </div>
    </MainLayout>
  );
};

export default Kepangkatan;

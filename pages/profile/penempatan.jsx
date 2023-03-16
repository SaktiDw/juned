import { Action, MainLayout, Table } from "@/components";
import { fetchListPenempatan } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Penempatan = () => {
  const {
    data: penempatan,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["penempatan"],
    queryFn: () => fetchListPenempatan(),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-2 dark:text-white w-full h-full">
        <span className="text-xs uppercase font-bold drop-shadow-lg shadow-white">
          Penempatan
        </span>

        <Table
          columns={[
            { key: "id", title: "No." },
            ,
            { key: "status", title: "Status" },
            { key: "ikatan_kerja", title: "Ikatan Kerja" },
            { key: "jenjang_pendidikan", title: "Jenjang Pendidikan" },
            { key: "unit", title: "Unit" },
            { key: "perguruan_tinggi", title: "Perguruan Tinggi" },
            {
              key: "terhitung_mulai_tanggal",
              title: "Terhitung Mulai Tanggal",
            },
            { key: "tanggal_keluar", title: "Tanggal Keluar" },
            {
              key: "id",
              title: "Action",
              render: (val) => <Action param={val} />,
            },
          ]}
          data={penempatan?.data}
        />
      </div>
    </MainLayout>
  );
};

export default Penempatan;

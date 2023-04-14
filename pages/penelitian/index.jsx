import { Action, Button, MainLayout, Nav, Table } from "@/components";
import { fetchListPenelitian } from "@/helper/api/api";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Penelitian = () => {
  const {
    data: penelitian,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["penelitian"],
    queryFn: () => fetchListPenelitian(id),
    networkMode: "offlineFirst",
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-full">
        <Nav title={"detail penelitian"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Detail Penelitian
        </h1>
        <Table
          createLink={"/penelitian/create"}
          columns={[
            { key: "id", title: "No." },
            ,
            { key: "judul", title: "Judul" },
            {
              key: "bidang_keilmuan",
              title: "Bidang Keilmuan",
            },
            {
              key: "tahun_pelaksanaan",
              title: "Tahun Pelaksanaan",
            },
            {
              key: "lama_kegiatan",
              title: "Lama Kegiatan",
              render: (val) => <span>{val.lama_kegiatan} tahun</span>,
            },
            {
              key: "id",
              title: "Action",
              render: (val) => <Action param={val} baseUrl={"/penelitian"} />,
            },
          ]}
          data={penelitian?.data}
        />
      </div>
    </MainLayout>
  );
};

export default Penelitian;

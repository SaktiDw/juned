import {
  Action,
  Button,
  MainLayout,
  Nav,
  Table,
  TabRiwayatAjuanPerubahanData,
} from "@/components";
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
      <div className="flex flex-col gap-4 dark:text-white w-full">
        <Nav title={"Jabatan Fungsional"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Riwayat Jabatan Fungsional
        </h1>
        <Table
          createLink={"/jabatan-fungsional/create"}
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
        <TabRiwayatAjuanPerubahanData
          title={"Riwayat Ajuan Jabatan Fungsional"}
        />
      </div>
    </MainLayout>
  );
};

export default JabatanFungsional;
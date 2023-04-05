import {
  Action,
  Button,
  MainLayout,
  Nav,
  Table,
  TabRiwayatAjuanPerubahanData,
} from "@/components";
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
    networkMode: "offlineFirst",
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full">
        <Nav title={"Kepangkatan"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Riwayat Golongan/Pangkat
        </h1>
        <Table
          createLink={"/kepangkatan/create"}
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
        <TabRiwayatAjuanPerubahanData
          title={" Riwayat Ajuan Perubahan Data Golongan/Pangkat "}
        />
      </div>
    </MainLayout>
  );
};

export default Kepangkatan;

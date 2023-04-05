import { Action, Button, MainLayout, Nav, Table } from "@/components";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Pengabdian = () => {
  const {
    data: paten,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["paten"],
    queryFn: () => null,
    networkMode: "offlineFirst",
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-full">
        <Nav title={"paten"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Pengabdian
        </h1>
        <div className="flex justify-between">
          <Button icon={<i className="fi-rr-plus"></i>} text="Tambah" />
          <Button
            icon={<i className="fi-rr-plus"></i>}
            text={"Riwayat Ajuan Perubahan"}
          />
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
          data={paten?.data}
        />
      </div>
    </MainLayout>
  );
};

export default Pengabdian;

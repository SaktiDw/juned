import { Action, Button, MainLayout, Nav, Table } from "@/components";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Publikasi = () => {
  const {
    data: paten,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["paten"],
    queryFn: () => null,
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-full">
        <Nav title={"paten"} />
        <h1 className="text-xs uppercase font-bold drop-shadow-lg shadow-white">
          Publikasi
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

export default Publikasi;

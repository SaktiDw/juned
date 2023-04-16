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
    networkMode: "offlineFirst",
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-full">
        <Nav title={"Publikasi"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Publikasi
        </h1>
        <div className="flex justify-between">
          <Button
            size={"small"}
            icon={<i className="fi-rr-cloud-download"></i>}
            text={"Import Publikasi dari SINTA"}
          />
        </div>
        <Table
          columns={[
            { key: "id", title: "No." },
            ,
            { key: "judul", title: "judul" },
            {
              key: "kategori_kegiatan",
              title: "Terhitung Mulai Tanggal",
            },
            { key: "jenis_publikasi", title: "jenis publikasi" },
            { key: "quartile", title: "quartile" },
            { key: "tanggal_terbit", title: "tanggal terbit" },
            { key: "asal_data", title: "asal data" },
            { key: "rubrik_bkd", title: "rubrik bkd" },
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

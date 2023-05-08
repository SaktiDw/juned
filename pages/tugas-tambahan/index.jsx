import {
  Action,
  Breadcrumbs,
  Button,
  MainLayout,
  Nav,
  Table,
} from "@/components";
import React from "react";

const TugasTambahan = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Tugas Tambahan"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Tugas Tambahan
        </h1>
        <Table
          createLink={"/tugas-tambahan/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "tugas_tambahan", title: "Tugas Tambahan" },
            {
              key: "unit_kerja",
              title: "Unit Kerja",
            },
            { key: "instansi", title: "Instansi" },
            { key: "tanggal_mulai", title: "Tanggal Mulai" },
            { key: "tanggal_berakhir", title: "Tanggal Berakhir" },
            {
              key: "rubrik_bkd",
              title: "Rubrik BKD",
            },
            {
              key: "id",
              title: "aksi",
              render: (val) => <Action param={val} />,
            },
          ]}
        />
      </div>
    </MainLayout>
  );
};

export default TugasTambahan;

import {
  Action,
  Breadcrumbs,
  Button,
  MainLayout,
  Nav,
  Table,
} from "@/components";
import React from "react";

const BahanAjar = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Bahan Ajar"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Bahan Ajar
        </h1>
        <Table
          createLink={"/bahan-ajar/create"}
          columns={[
            { key: "id", title: "No." },
            { key: "judul_bahan_ajar", title: "Judul Bahan Ajar" },
            { key: "isbn", title: "ISBN" },
            { key: "tanggal_terbit", title: "Tanggal Terbit" },
            {
              key: "penerbit",
              title: "Penerbit",
            },
            {
              key: "jumlah_mahasiswa",
              title: "Jumlah Mahasiswa",
            },
            {
              key: "rubrik_bkd",
              title: "Rubrik BKD",
            },
            {
              key: "id",
              title: "Action",
              render: (val) => <Action param={val} />,
            },
          ]}
        />
      </div>
    </MainLayout>
  );
};

export default BahanAjar;

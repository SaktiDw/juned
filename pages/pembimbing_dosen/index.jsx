import {
  Action,
  Breadcrumbs,
  Button,
  MainLayout,
  Nav,
  Select,
  Table,
} from "@/components";
import React from "react";

const BimbinganDosen = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full h-full">
        <Nav title={"Bimbingan Dosen"} />
        <h1 className="text-xs uppercase font-bold drop-shadow-lg shadow-white">
          Data Bimbingan Dosen
        </h1>
        <div className="flex justify-between">
          <Button
            icon={<i className="fi-rr-cloud-download-alt pt-1"></i>}
            text="Import Bimbingan Dosen"
          />
        </div>
        <Table
          columns={[
            { key: "id", title: "No." },
            { key: "nama_pembimbing", title: "Nama pembimbing" },
            { key: "nama_bimbingan", title: "Nama Bimbingan" },
            { key: "tanggal_mulai", title: "Tanggal Mulai" },
            { key: "tanggal_selesai", title: "Tanggal Selesai" },
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

export default BimbinganDosen;

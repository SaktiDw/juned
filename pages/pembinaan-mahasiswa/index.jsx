import {
  Action,
  Breadcrumbs,
  Button,
  MainLayout,
  Nav,
  PeriodeSelection,
  Select,
  Table,
} from "@/components";
import React from "react";

const PembinaanMahasiswa = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Pembinaan Mahasiswa"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Pembinaan Mahasiswa
        </h1>
        <div className="flex justify-between">
          <Button
            size={"small"}
            icon={<i className="fi-rr-cloud-download-alt pt-1"></i>}
            text="Import Pengujian Mahasiswa"
          />
          <PeriodeSelection />
        </div>
        <Table
          columns={[
            { key: "id", title: "No." },
            { key: "semester", title: "Semester" },
            { key: "judul_bimbingan", title: "Judul Pembinaan" },
            { key: "bidang_keilmuan", title: "Bidang Keilmuan" },
            { key: "jenis_bimbingan", title: "Jenis Pembinaan" },
            {
              key: "program_studi",
              title: "Program Studi",
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

export default PembinaanMahasiswa;

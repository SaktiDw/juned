import {
  Action,
  Breadcrumbs,
  Button,
  MainLayout,
  Nav,
  PeriodeSelection,
  Table,
} from "@/components";
import React from "react";

const PengujianMahasiswa = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Pengujian Mahasiswa"} />
        <div className="flex flex-col  gap-2 p-4 bg-blue-200 rounded-lg divide-y divide-blue-400 text-sm shadow-lg">
          <h1 className="text-primary">
            <b>Info :</b> Sumber data pengisian berasal dari Feeder PDDIKTI yang
            ada pada masing-masing PT, silahkan menghubungi Admin PT untuk
            penginputan/perbaikan data.
          </h1>
        </div>
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Pengujian Mahasiswa
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
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "judul_pengujian", title: "Judul Pengujian" },
            { key: "bidang_keilmuan", title: "Bidang Keilmuan" },
            { key: "jenis_pengujian", title: "Jenis Pengujian" },
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

export default PengujianMahasiswa;

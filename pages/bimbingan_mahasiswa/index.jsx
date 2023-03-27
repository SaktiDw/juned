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

const BimbinganMahasiswa = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full h-full">
        <Nav title={"Bimbingan Mahasiswa"} />
        <div className="flex flex-col  gap-2 p-4 bg-blue-200 rounded-lg divide-y divide-blue-400 text-sm shadow-lg">
          <h1 className="text-primary">
            <b>Info :</b> Sumber data pengisian berasal dari Feeder PDDIKTI yang
            ada pada masing-masing PT, silahkan menghubungi Admin PT untuk
            penginputan/perbaikan data.
          </h1>
        </div>
        <h1 className="text-xs uppercase font-bold drop-shadow-lg shadow-white">
          Bimbingan Mahasiswa
        </h1>
        <div className="flex justify-between">
          <Button
            icon={<i className="fi-rr-cloud-download-alt pt-1"></i>}
            text="Import Bimbingan Mahasiswa"
          />

          <div className="flex gap-2 items-center">
            <label htmlFor="periode">Periode</label>
            <select
              name="periode"
              id="periode"
              className="py-2 px-4 bg-white dark:bg-slate-800 ring-primary ring rounded-md shadow-xl"
            >
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
        </div>
        <Table
          columns={[
            { key: "id", title: "No." },
            { key: "semester", title: "Semester" },
            { key: "kategori_kegiatan", title: "Kategori Kegiatan" },
            { key: "judul_bimbingan", title: "Judul Bimbingan" },
            { key: "jenis_bimbingan", title: "Jenis Bimbingan" },
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

export default BimbinganMahasiswa;

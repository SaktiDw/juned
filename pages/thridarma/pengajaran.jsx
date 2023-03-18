import { Action, Breadcrumbs, MainLayout, Table } from "@/components";
import React from "react";

const Pengajaran = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full h-full">
        <Breadcrumbs />
        <div className="flex flex-col  gap-2 p-4 bg-blue-200 rounded-lg divide-y divide-blue-400 text-sm shadow-lg">
          <h1 className="text-primary">
            <b>Info :</b> Sumber data pengisian berasal dari Feeder PDDIKTI yang
            ada pada masing-masing PT, silahkan menghubungi Admin PT untuk
            penginputan/perbaikan data.
          </h1>
          <p className="text-primary">
            Data yang bisa ditarik untuk BKD adalah data pengajaran yang jenis
            matakuliah <b>selain Tugas akhir/Skripsi/Thesis/Disertasi</b>
          </p>
        </div>
        <h1 className="text-xs uppercase font-bold drop-shadow-lg shadow-white">
          Riwayat Golongan/Pangkat
        </h1>
        <div className="flex justify-between">
          <button className="flex items-center justify-center gap-2 py-2 px-4 bg-primary rounded-md shadow-xl  text-white">
            <i className="fi-rr-plus"></i> Tambah
          </button>
          <button className="flex items-center justify-center gap-2 py-2 px-4 bg-primary rounded-md shadow-xl text-white">
            <i className="fi-rr-plus"></i> Riwayat Ajuan Perubahan
          </button>
        </div>
        <Table
          columns={[
            { key: "id", title: "No." },
            { key: "mata_kuliah", title: "Mata Kuliah" },
            { key: "jenis_mata_kuliah", title: "Jenis Mata Kuliah" },
            { key: "bidang_keilmuan", title: "Bidang Keilmuan" },
            {
              key: "kelas",
              title: "Kelas",
            },
            {
              key: "jumlah_mahasiswa",
              title: "Jumlah Mahasiswa",
            },
            {
              key: "sks",
              title: "SKS",
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

export default Pengajaran;

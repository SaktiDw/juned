import {
  Action,
  Button,
  MainLayout,
  Nav,
  PeriodeSelection,
  Table,
} from "@/components";
import { useRouter } from "next/router";
import React from "react";

const Pengajaran = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Pengajaran"} />
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
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Pengajaran
        </h1>
        <div className="flex justify-between">
          <Button
            size={"small"}
            icon={<i className="fi-rr-cloud-download-alt pt-1"></i>}
            text="Import Pengajaran"
          />
          <PeriodeSelection />
        </div>
        <Table
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
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
              render: (val) => (
                <Action
                  param={val}
                  action={["detail", "edit"]}
                  baseUrl={"/pengajaran"}
                />
              ),
            },
          ]}
        />
      </div>
    </MainLayout>
  );
};

export default Pengajaran;

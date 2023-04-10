import { Action, MainLayout, Nav, Table } from "@/components";
import React from "react";

const AnggotaProfesi = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Penunjang Lain"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Penunjang Lain
        </h1>
        <Table
          createLink={"/penunjang-lain/create"}
          columns={[
            { key: "id", title: "No." },
            { key: "nama_kegiatan", title: "Nama Kegiatan" },
            { key: "instansi_penyelenggara", title: "Instansi Penyelenggara" },
            { key: "sk", title: "Nomor Sk Penugasan" },
            { key: "tmmd", title: "Terhitung Mulai Tanggal" },
            { key: "tanggal_selesai", title: "Tanggal Selesai" },
            { key: "peran", title: "Peran" },
            { key: "rubrik_bkd", title: "Rubrik BKD" },
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

export default AnggotaProfesi;

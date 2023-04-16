import { Action, MainLayout, Nav, Table } from "@/components";
import React from "react";

const AnggotaProfesi = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Anggota Profesi"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Anggota Profesi
        </h1>
        <Table
          createLink={"/anggota-profesi/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            { key: "nama_organisasi", title: "Anggota Profesi" },
            { key: "peran_kedudukan", title: "Peran/Kedudukan" },
            { key: "mulai_keanggotaan", title: "Mulai Keanggotaan" },
            { key: "selesai_keanggotaan", title: "Selesai Keanggotaan" },
            { key: "instansi_profesi", title: "Instansi" },
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

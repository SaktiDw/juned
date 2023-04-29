import { Action, Button, MainLayout, Nav, Table } from "@/components";
import React from "react";

const PendidikanFormal = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"PendidikanFormal"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          PendidikanFormal
        </h1>
        <Table
          createLink={"/pendidikan-formal/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            {
              key: "jenis_kesejahteraan",
              title: "Jenjang",
            },
            { key: "kategori_kegiatan", title: "Gelar" },
            { key: "no_sk_penugasan", title: "Bidang Studi" },
            { key: "tanggal_sk_penugasan", title: "Perguruan tinggi" },
            { key: "tanggal_sk_penugasan", title: "Tahun Lulus" },
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

export default PendidikanFormal;

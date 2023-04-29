import { Action, Button, MainLayout, Nav, Table } from "@/components";
import React from "react";

const Tunjangan = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Tunjangan"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Tunjangan
        </h1>
        <Table
          createLink={"/tunjangan/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            {
              key: "jenis_kesejahteraan",
              title: "Jenis Tunjangan",
            },
            { key: "kategori_kegiatan", title: "Nama Tunjangan" },
            { key: "no_sk_penugasan", title: "Instansi Pemberi Tunjangan" },
            { key: "tanggal_sk_penugasan", title: "Sumber Dana" },
            { key: "tanggal_sk_penugasan", title: "Tahun Mulai" },
            { key: "tanggal_sk_penugasan", title: "Tahun Selesai" },
            { key: "tanggal_sk_penugasan", title: "Nominal" },
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

export default Tunjangan;

import { Action, Button, MainLayout, Nav, Table } from "@/components";
import React from "react";

const Kesejahteraan = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Kesejahteraan"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Kesejahteraan
        </h1>
        <Table
          createLink={"/kesejahteraan/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            {
              key: "jenis_kesejahteraan",
              title: "Jenis Kesejahteraan",
            },
            { key: "kategori_kegiatan", title: "Layanan Kesejahteraan" },
            { key: "no_sk_penugasan", title: "Penyelenggara" },
            { key: "tanggal_sk_penugasan", title: "Tahun Mulai" },
            { key: "tanggal_sk_penugasan", title: "Tahun Selesai" },
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

export default Kesejahteraan;

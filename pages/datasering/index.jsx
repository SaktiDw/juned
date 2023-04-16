import {
  Action,
  Breadcrumbs,
  Button,
  MainLayout,
  Nav,
  Table,
} from "@/components";
import React from "react";

const Datasering = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full">
        <Nav title={"Datasering"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Datasering
        </h1>
        <div className="flex justify-between">
          <Button icon={<i className="fi-rr-plus"></i>} text="Tambah" />
        </div>
        <Table
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            {
              key: "perguruan_tinggi_sasaran",
              title: "Perguruan Tinggi Sasaran",
            },
            { key: "kategori_kegiatan", title: "Kategori Kegiatan" },
            { key: "no_sk_penugasan", title: "No. SK Penugasan" },
            { key: "tanggal_sk_penugasan", title: "Tanggal SK Penugasan" },
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

export default Datasering;

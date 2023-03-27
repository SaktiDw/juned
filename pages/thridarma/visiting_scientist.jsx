import {
  Action,
  Breadcrumbs,
  Button,
  MainLayout,
  Nav,
  Table,
} from "@/components";
import React from "react";

const VisitingScientist = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 w-full h-full">
        <Nav title={"Visiting Scientist"} />
        <h1 className="text-xs uppercase font-bold drop-shadow-lg shadow-white">
          Visiting Scientist
        </h1>
        <div className="flex justify-between">
          <Button icon={<i className="fi-rr-plus"></i>} text={"Tambah"} />
        </div>
        <Table
          columns={[
            { key: "id", title: "No." },
            {
              key: "perguruan_tingggi_pengundang",
              title: "Perguruan Tinggi Pengundang",
            },
            { key: "lama_kegiatan", title: "Lama Kegiatan" },
            { key: "tanggal_pelaksanaan", title: "Tanggal Pelaksanaan" },
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

export default VisitingScientist;

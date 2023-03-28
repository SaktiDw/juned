import React from "react";
import { Action, Tab, Table } from "..";

const TabRiwayatAjuanPerubahanDataProfil = () => {
  return (
    <Tab
      title={"Riwayat Ajuan Perubahan Data Profil"}
      tabs={["Draft", "Diajukan", "Disetujui", "Ditolak", "Ditangguhkan"]}
      contents={[
        <Table
          key={1}
          columns={[
            { key: "tanggal_dibuat", title: "Tanggal Dibuat" },
            { key: "keterangan_perubahan", title: "Keterangan Perubahan" },
            { key: "status", title: "Status" },
            {
              key: "id",
              title: "Action",
              render: (val) => <Action param={val} />,
            },
          ]}
        />,
        <Table
          key={2}
          columns={[
            { key: "tanggal_diajukan", title: "Tanggal Diajukan" },
            { key: "keterangan_perubahan", title: "Keterangan Perubahan" },
            { key: "status", title: "Status" },
            { key: "umur_ajuan", title: "Umur Ajuan ( hari )" },
            {
              key: "id",
              title: "Action",
              render: (val) => <Action param={val} />,
            },
          ]}
        />,
        <Table
          key={3}
          columns={[
            { key: "tanggal_diajukan", title: "Tanggal Diajukan" },
            { key: "tanggal_disetujui", title: "Tanggal Disetujui" },
            { key: "keterangan_perubahan", title: "Keterangan Perubahan" },
            { key: "status", title: "Status" },
            { key: "umur_ajuan", title: "Umur Ajuan ( hari )" },
            {
              key: "id",
              title: "Action",
              render: (val) => <Action param={val} />,
            },
          ]}
        />,
        <Table
          key={4}
          columns={[
            { key: "tanggal_diajukan", title: "Tanggal Diajukan" },
            { key: "tanggal_ditolak", title: "Tanggal Ditolak" },
            { key: "keterangan_penolakan", title: "Keterangan Penolakan" },
            { key: "status", title: "Status" },
            { key: "umur_ajuan", title: "Umur Ajuan ( hari )" },
            {
              key: "id",
              title: "Action",
              render: (val) => <Action param={val} />,
            },
          ]}
        />,
        <Table
          key={5}
          columns={[
            { key: "tanggal_diajukan", title: "Tanggal Diajukan" },
            { key: "tanggal_ditangguhkan", title: "Tanggal Ditangguhkan" },
            { key: "keterangan_penangguhan", title: "Keterangan Penangguhan" },
            { key: "status", title: "Status" },
            { key: "umur_ajuan", title: "Umur Ajuan ( hari )" },
            {
              key: "id",
              title: "Action",
              render: (val) => <Action param={val} />,
            },
          ]}
        />,
      ]}
    />
  );
};

export default TabRiwayatAjuanPerubahanDataProfil;

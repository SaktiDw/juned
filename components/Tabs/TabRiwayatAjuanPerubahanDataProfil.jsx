import React from "react";
import { Action, Tab, Table } from "..";

const TabRiwayatAjuanPerubahanDataProfil = () => {
  return (
    <Tab
      title={"Riwayat Ajuan Perubahan Data Profil"}
      tabs={["Draft", "Diajukan", "Disetujui", "Ditolak", "Ditangguhkan"]}
      contents={[
        <>
          <p>Tab 1 Content</p>
          <Table
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
          />
        </>,
        <p>Tab 2 Content</p>,
        <p>Tab 3 Content</p>,
        <p>Tab 4 Content</p>,
        <p>Tab 5 Content</p>,
      ]}
    />
  );
};

export default TabRiwayatAjuanPerubahanDataProfil;

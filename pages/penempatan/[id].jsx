import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchListPenempatan } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const Penempatan = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: penempatan,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["penempatan"],
    queryFn: () => fetchListPenempatan(),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full">
        <Nav title={"Detail Penempatan"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Detail Penempatan
        </h1>
        <div className="flex flex-col gap-2 justify-center bg-white rounded-xl p-4 divide-y">
          <div className="grid grid-cols-2">
            <h1>Status</h1>
            <span>{penempatan.data[0].status || "( tidak ada data )"}</span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Jenjang Pendidikan</h1>
            <span>
              {penempatan.data[0].jenjang_pendidikan || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Unit</h1>
            <span>{penempatan.data[0].unit || "( tidak ada data )"}</span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Perguruan Tinggi</h1>
            <span>
              {penempatan.data[0].perguruan_tinggi || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>No. Surat Tugas</h1>
            <span>{penempatan.data[0].sk || "( tidak ada data )"}</span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Terhitung Mulai Tanggal</h1>
            <span>
              {penempatan.data[0].terhitung_mulai_tanggal ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Tanggal Surat Keluar</h1>
            <span>
              {penempatan.data[0].tanggal_surat_keluar || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Tanggal Keluar</h1>
            <span>
              {penempatan.data[0].tanggal_keluar || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Keterangan Keluar</h1>
            <span>
              {penempatan.data[0].keterangan_keluar || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Ikatan Kerja</h1>
            <span>{penempatan.data[0].status || "( tidak ada data )"}</span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Penempatan;

import { Action, MainLayout, Nav, Table } from "@/components";
import { fetchDetailPenelitian } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const DetailPenelitian = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: penelitian,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["penelitian", id],
    queryFn: () => fetchDetailPenelitian(id),
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full">
        <Nav title={"Detail Penelitian"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Detail Penelitian
        </h1>
        <div className="flex flex-col gap-2 justify-center bg-white rounded-xl p-4 divide-y">
          <div className="grid grid-cols-2">
            <h1>Skim Kegiatan</h1>
            <span>{penelitian?.data.jenis_skim || "( tidak ada data )"}</span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Tahun Anggaran</h1>
            <span>
              {penelitian?.data.tahun_kegiatan || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Litabmas Sebelumnya</h1>
            <span>
              {penelitian?.data.litabmas_sebelumnya || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Afiliasi</h1>
            <span>{penelitian?.data.afiliasi || "( tidak ada data )"}</span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Kelompok Bidang</h1>
            <span>
              {penelitian?.data.kelompok_bidang || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Nomor SK Penugasan</h1>
            <span>{penelitian?.data.sk_penugasan || "( tidak ada data )"}</span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Tanggal SK Penugasan</h1>
            <span>
              {penelitian?.data.tanggal_sk_penugasan || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Lama Kegiatan (tahun)</h1>
            <span>
              {penelitian?.data.lama_kegiatan || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Judul Kegiatan</h1>
            <span>{penelitian?.data.judul || "( tidak ada data )"}</span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Lokasi Kegiatan</h1>
            <span>{penelitian?.data.lokasi || "( tidak ada data )"}</span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Tahun Pelaksanaan Ke</h1>
            <span>
              {penelitian?.data.tahun_pelaksanaan || "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Dana Dari Dikti (Rp.)</h1>
            <span>
              {penelitian?.data.dana_dikti.toLocaleString() ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Dana Dari Perguruan Tinggi (Rp.)</h1>
            <span>
              {penelitian?.data.dana_perguruan_tinggi.toLocaleString() ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>Dana Dari Institusi Lain (Rp.)</h1>
            <span>
              {penelitian?.data.dana_institusi_lain.toLocaleString() ||
                "( tidak ada data )"}
            </span>
          </div>
          <div className="grid grid-cols-2">
            <h1>In Kind</h1>
            <span>{penelitian?.data.in_kind || "( tidak ada data )"}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Anggota Dosen
          </h1>
          <Table
            columns={[
              { key: "id", title: "No" },
              { key: "nama", title: "nama" },
              { key: "peran", title: "peran" },
              {
                key: "aktif",
                title: "aktif",
                render: (val) => (val.aktif ? "Aktif" : "Tidak Aktif"),
              },
            ]}
            data={penelitian?.data.anggota.filter(
              (item) => item.jenis === "Dosen"
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Anggota Mahasiswa
          </h1>
          <Table
            columns={[
              { key: "id", title: "No" },
              { key: "nama", title: "nama" },
              { key: "peran", title: "peran" },
              {
                key: "aktif",
                title: "aktif",
                render: (val) => (val.aktif ? "Aktif" : "Tidak Aktif"),
              },
            ]}
            data={penelitian?.data.anggota.filter(
              (item) => item.jenis === "Mahasiswa"
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Anggota Non Civitas Akademika
          </h1>
          <Table
            columns={[
              { key: "id", title: "No" },
              { key: "nama", title: "nama" },
              { key: "peran", title: "peran" },
              {
                key: "aktif",
                title: "aktif",
                render: (val) => (val.aktif ? "Aktif" : "Tidak Aktif"),
              },
            ]}
            data={penelitian?.data.anggota.filter(
              (item) => item.jenis === "Other"
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
            Dokumen
          </h1>
          <Table
            columns={[
              { key: "id", title: "No" },
              { key: "nama", title: "nama" },
              { key: "jenis_dokumen", title: "jenis dokumen" },
              { key: "nama_file", title: "nama file" },
              { key: "jenis_file", title: "jenis file" },
              { key: "tanggal_upload", title: "tanggal upload" },
              {
                key: "tautan",
                title: "tautan",
                render: (val) => (
                  <Link href={val.tautan} className="text-primary">
                    Link
                  </Link>
                ),
              },
              {
                key: "id",
                title: "action",
                render: (val) => (
                  <Action
                    param={val}
                    baseUrl={"/penelitian"}
                    action={["delete", "detail", "edit"]}
                  />
                ),
              },
            ]}
            data={penelitian?.data.dokumen}
          />
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={`/penelitian/${id}/edit`}
            className="bg-primary rounded-xl py-2 px-4 text-white text-sm"
          >
            <i className="fi-rr-pencil"></i> Ubah Data
          </Link>
          <Link
            href={`/penelitian/${id}/edit`}
            className="bg-primary rounded-xl py-2 px-4 text-white text-sm"
          >
            <i className="fi-rr-pencil"></i> Laporkan Kesalahan
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailPenelitian;

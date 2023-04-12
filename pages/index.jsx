import Head from "next/head";

import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteUser, fetchUsers } from "@/helper/api/api";
import {
  Action,
  Chip,
  Dropdown,
  Form,
  FormUsers,
  Input,
  MainLayout,
  Table,
} from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Sister</title>
        <meta
          name="description"
          content="Sister Institut Teknologi Kalimantan"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1>Riwayat Perubahan Data Dosen</h1>
          <Table
            columns={[
              { key: "id", title: "id" },
              { key: "jenis_pdd", title: "Jenis PDD" },
              { key: "jenis_ajuan", title: "Jenis Ajuan" },
              { key: "tanggal_ajauan", title: "Tanggal Ajuan" },
              { key: "tanggal_verifikasi", title: "Tanggal Verifikasi" },
              { key: "umur_ajuan", title: "Umur Ajuan (hari)" },
              {
                key: "status_ajuan",
                title: "Status Ajuan",
                render: (val) => <Chip text={val.status_ajuan} />,
              },
              {
                key: "id",
                title: "Action",
                render: (val) => (
                  <Action param={val} baseUrl={"/"} action={["detail"]} />
                ),
              },
            ]}
            data={[
              {
                id: 1,
                jenis_pdd: "Pendidikan Formal 	Ajuan Data Baru",
                tanggal_ajuan: "28 Mei 2019",
                tanggal_verifikasi: "",
                umur_ajuan: "",
                status_ajuan: "Ditolak",
              },
              {
                id: 2,
                jenis_pdd: "Data Pribadi Kepegawaian 	Ajuan Update Data",
                tanggal_ajuan: "31 Oktober 2019",
                tanggal_verifikasi: "",
                umur_ajuan: "",
                status_ajuan: "Disetujui Kepegawaian PT",
              },
              {
                id: 3,
                jenis_pdd: "Pendidikan Formal 	Ajuan Hapus Data",
                tanggal_ajuan: "25 Maret 2020",
                tanggal_verifikasi: "",
                umur_ajuan: "",
                status_ajuan: "Ditolak",
              },
              {
                id: 4,
                jenis_pdd: "Data Pribadi Keluarga 	Ajuan Update Data",
                tanggal_ajuan: "25 Maret 2020",
                tanggal_verifikasi: "",
                umur_ajuan: "",
                status_ajuan: "Ditolak",
              },
              {
                id: 5,
                jenis_pdd: "Pendidikan Formal 	Ajuan Data Baru",
                tanggal_ajuan: "28 Mei 2019",
                tanggal_verifikasi: "02 Juli 2019",
                umur_ajuan: "35",
                status_ajuan:
                  "Disetujui Subdit Karier & Kompetensi / Kementerian",
              },
              {
                id: 6,
                jenis_pdd: "Data Pribadi Profil 	Ajuan Update Data",
                tanggal_ajuan: "04 Maret 2019",
                tanggal_verifikasi: "22 Maret 2019",
                umur_ajuan: "18",
                status_ajuan:
                  "Disetujui Subdit Karier & Kompetensi / Kementerian",
              },
              {
                id: 7,
                jenis_pdd: "Data Pribadi Alamat dan Kontak 	Ajuan Update Data",
                tanggal_ajuan: "25 Maret 2020",
                tanggal_verifikasi: "30 Maret 2020",
                umur_ajuan: "5",
                status_ajuan:
                  "Disetujui Subdit Karier & Kompetensi / Kementerian",
              },
              {
                id: 8,
                jenis_pdd: "Data Pribadi Keluarga 	Ajuan Update Data",
                tanggal_ajuan: "16 April 2020",
                tanggal_verifikasi: "21 April 2020",
                umur_ajuan: "5",
                status_ajuan:
                  "Disetujui Subdit Karier & Kompetensi / Kementerian",
              },
              {
                id: 9,
                jenis_pdd: "Data Pribadi Kepegawaian 	Ajuan Update Data",
                tanggal_ajuan: "25 Maret 2020",
                tanggal_verifikasi: "30 Maret 2020",
                umur_ajuan: "5",
                status_ajuan:
                  "Disetujui Subdit Karier & Kompetensi / Kementerian",
              },
              {
                id: 10,
                jenis_pdd: "Data Pribadi Keluarga 	Ajuan Update Data",
                tanggal_ajuan: "25 Juni 2021",
                tanggal_verifikasi: "28 Juni 2021",
                umur_ajuan: "3",
                status_ajuan:
                  "Disetujui Subdit Karier & Kompetensi / Kementerian",
              },
              {
                id: 11,
                jenis_pdd: "Jabatan Fungsional 	Ajuan Data Baru",
                tanggal_ajuan: "20 April 2021",
                tanggal_verifikasi: "21 April 2021",
                umur_ajuan: "1",
                status_ajuan:
                  "Disetujui Subdit Karier & Kompetensi / Kementerian",
              },
              {
                id: 12,
                jenis_pdd: "Kepangkatan 	Ajuan Data Baru",
                tanggal_ajuan: "30 Maret 2021",
                tanggal_verifikasi: "30 Maret 2021",
                umur_ajuan: "0",
                status_ajuan:
                  "Disetujui Subdit Karier & Kompetensi / Kementerian",
              },
            ]}
          />
        </div>
        <div className="grid grid-cols-2 gap-8 justify-start items-start">
          <div className="grid grid-flow-row gap-4">
            <div className="flex flex-col gap-2">
              <h1>Ringkasan Profil</h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 divide-y">
                <div className="relative w-[300px] h-[300px] mx-auto">
                  <Image
                    fill
                    alt={"profile"}
                    src={"/images.jpg"}
                    className={`rounded-lg shadow-lg  object-cover`}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">Nama :</span>
                  <span className="font-semibold">TEGAR PALYUS FIQAR</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">
                    NIDN/NITK :
                  </span>
                  <span className="font-semibold">0007099001</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">NIP :</span>
                  <span className="font-semibold">199009072019031014</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">
                    Fakultas :
                  </span>
                  <span className="font-semibold">
                    Matematika dan Teknologi Informasi
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">Prodi :</span>
                  <span className="font-semibold">Informatika</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">
                    Status Kepegawaian :
                  </span>
                  <span className="font-semibold">PNS</span>
                </div>
                <Link
                  href={"/"}
                  className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-lg text-white"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1>Kesejahteraan</h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 divide-y">
                <div className="bg-blue-300 p-4 rounded-xl">Tidak ada data</div>
                <div className="flex justify-end py-4">
                  <Link
                    href={"/"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-lg text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1>Penelitian</h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 divide-y text-xs">
                <Table
                  columns={[
                    { key: "id", title: "No" },
                    { key: "judul_litabmas", title: "Judul Litabmas" },
                    { key: "tahun_anggaran", title: "Tahun Anggaran" },
                  ]}
                  data={[
                    {
                      id: 1,
                      judul_litabmas:
                        "MENGGUNAKAN MODEL LSR (LEXICAL SEMANTIC RECOGNITION) BERBASIS STREUSLE (SUPERSENSE - TAGGED REPOSITORY OF ENGLISH WITH A UNIFIED SEMANTICS FOR LEXICAL EXPRESSIONS) UNTUK MENGEMBANGKAN SISTEM PENILAIAN OTOMATIS PENULISAN ESSAY BAHASA INGGRIS ",
                      tahun_anggaran: "2022",
                    },
                    {
                      id: 2,
                      judul_litabmas:
                        "Pembangunan Dashboard untuk Penerimaan Mahaiswa Baru Institut Teknologi Kalimantan",
                      tahun_anggaran: "2021",
                    },
                    {
                      id: 3,
                      judul_litabmas:
                        "Integrasi Pelayanan Publik Unit Pelaksana Teknis Bahasa Berbasis Web",
                      tahun_anggaran: "2020",
                    },
                    {
                      id: 4,
                      judul_litabmas:
                        "Perancangan Arsitektur Sistem dan Teknologi Informasi untuk Organisasi Perangkat Daerah (OPD) Pemerintah Kota Balikpapan menggunakan TOGAF (The Open Group Architecture Framework)",
                      tahun_anggaran: "2019",
                    },
                    {
                      id: 5,
                      judul_litabmas:
                        "Perancangan Arsitektur Sistem dan Teknologi Informasi untuk Organisasi Perangkat Daerah (OPD) Pemerintah Kota Balikpapan menggunakan TOGAF (The Open Group Architecture Framework) ",
                      tahun_anggaran: "2019",
                    },
                  ]}
                />
                <div className="flex justify-end py-4">
                  <Link
                    href={"/"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-lg text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1>Publikasi</h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 divide-y text-xs">
                {/* <div className="bg-blue-300 p-4 rounded-xl">Tidak ada data</div> */}
                <Table
                  columns={[
                    { key: "id", title: "No" },
                    { key: "judul", title: "Judul" },
                    { key: "jenis", title: "Jenis" },
                    { key: "tahun_anggaran", title: "Tanggal Terbit" },
                  ]}
                  data={[
                    {
                      id: 1,
                      judul:
                        "MULTIPLE LEVEL DATA HIDING MEDICAL IMAGE BASE ON DISCRETE COSINE TRANSFORM (DCT) METHOD USING MULTISCALE IMAGE SHARING (MSIS)",
                      jenis: "Lain-lain",
                      tanggal_terbit: "",
                    },
                    {
                      id: 2,
                      judul:
                        "MODIFIKASI FOTOBIOREAKTOR HEMAT ENERGI DENGAN LIGHT EMITTING DIODE (LED) UNTUK MENINGKATKAN POPULASI Chlorella spp. DALAM UPAYA P...",
                      jenis: "Lain-lain",
                      tanggal_terbit: "",
                    },
                    {
                      id: 3,
                      judul: "Halaman Belakang",
                      jenis: "Lain-lain",
                      tanggal_terbit: "",
                    },
                    {
                      id: 4,
                      judul:
                        "Developing problem solvers: New perspectives on pedagogical practices in police use of force training",
                      jenis: "Lain-lain",
                      tanggal_terbit: "",
                    },
                    {
                      id: 5,
                      judul:
                        "MODIFIKASI FOTOBIOREAKTOR HEMAT ENERGI DENGAN LIGHT EMITTING DIODE (LED) UNTUK MENINGKATKAN POPULASI Chlorella spp. DALAM UPAYA PEMENUHAN PAKAN ALAMI LARVA IKAN BANDENG",
                      jenis: "Lain-lain",
                      tanggal_terbit: "",
                    },
                  ]}
                />
                <div className="flex justify-end py-4">
                  <Link
                    href={"/"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-lg text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1>Visiting Scientist</h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 divide-y">
                <div className="bg-blue-300 p-4 rounded-xl">Tidak ada data</div>
                <div className="flex justify-end py-4">
                  <Link
                    href={"/"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-lg text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-row gap-4">
            <div className="flex flex-col gap-2">
              <h1>Pendidikan Terakhir</h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 divide-y">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">
                    Jenjang Pendidikan :
                  </span>
                  <span className="font-semibold">S2</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">
                    Bidang Studi :
                  </span>
                  <span className="font-semibold">Teknik Informatika</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">
                    Perguruan Tinggi :
                  </span>
                  <span className="font-semibold">
                    Institut Teknologi Sepuluh November
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">
                    Tahun Lulus :
                  </span>
                  <span className="font-semibold">2017</span>
                </div>

                <Link
                  href={"/"}
                  className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-lg text-white"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1>Tunjangan</h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 divide-y text-xs">
                {/* <div className="bg-blue-300 p-4 rounded-xl">Tidak ada data</div> */}
                <Table
                  columns={[
                    { key: "id", title: "No" },
                    { key: "tunjangan", title: "Tunjangan" },
                    { key: "instansi", title: "Instansi" },
                    { key: "dari_tahun", title: "Dari Tahun" },
                    { key: "sampai_tahun", title: "Sampai Tahun" },
                  ]}
                  data={[
                    {
                      id: 1,
                      tunjangan: "Tunjangan Istri",
                      instansi: "Institut Teknologi Kalimantan",
                      dari_tahun: "2019",
                      sampai_tahun: "",
                    },
                    {
                      id: 2,
                      tunjangan: "Kepala UPT TIK",
                      instansi: "Institut Teknologi Kalimantan",
                      dari_tahun: "2019",
                      sampai_tahun: "2023",
                    },
                    {
                      id: 3,
                      tunjangan: "Tunjangan Umum",
                      instansi: "Institut Teknologi Kalimantan",
                      dari_tahun: "2019",
                      sampai_tahun: "",
                    },
                    {
                      id: 4,
                      tunjangan: "Tunjangan Beras",
                      instansi: "Institut Teknologi Kalimantan",
                      dari_tahun: "2017",
                      sampai_tahun: "",
                    },
                  ]}
                />
                <div className="flex justify-end py-4">
                  <Link
                    href={"/"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-lg text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1>Pengajaran</h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 divide-y text-xs">
                <Table
                  columns={[
                    { key: "id", title: "No" },
                    { key: "mata_kuliah", title: "Mata Kuliah" },
                    { key: "jenjang_pendidikan", title: "Jenjang Pendidikan" },
                    { key: "semester", title: "Semester" },
                  ]}
                  data={[
                    {
                      id: 1,
                      mata_kuliah: "Algoritme Pemrograman",
                      jenjang_pendidikan: "S1",
                      semester: "2022/2023 Ganjil",
                    },
                    {
                      id: 2,
                      mata_kuliah: "Keprofesian Informatika",
                      jenjang_pendidikan: "S1",
                      semester: "2022/2023 Ganjil",
                    },
                    {
                      id: 3,
                      mata_kuliah: "Keprofesian Informatika",
                      jenjang_pendidikan: "S1",
                      semester: "2022/2023 Ganjil",
                    },
                    {
                      id: 4,
                      mata_kuliah: "Algoritme Pemrograman",
                      jenjang_pendidikan: "S1",
                      semester: "2021/2022 Genap",
                    },
                    {
                      id: 5,
                      mata_kuliah: "Wawasan Umum dan Gagasan Informatika",
                      jenjang_pendidikan: "S1",
                      semester: "2021/2022 Genap",
                    },
                    {
                      id: 6,
                      mata_kuliah: "Teknologi IoT",
                      jenjang_pendidikan: "S1",
                      semester: "2021/2022 Genap",
                    },
                    {
                      id: 7,
                      mata_kuliah: "Wawasan Umum dan Gagasan Informatika",
                      jenjang_pendidikan: "S1",
                      semester: "2021/2022 Genap",
                    },
                    {
                      id: 8,
                      mata_kuliah: "Tata Kelola Teknologi Informasi",
                      jenjang_pendidikan: "S1",
                      semester: "2021/2022 Ganjil",
                    },
                    {
                      id: 9,
                      mata_kuliah: "Algoritme Pemrograman",
                      jenjang_pendidikan: "S1",
                      semester: "2021/2022 Ganjil",
                    },
                    {
                      id: 10,
                      mata_kuliah: "Keprofesian Informatika",
                      jenjang_pendidikan: "S1",
                      semester: "2021/2022 Ganjil",
                    },
                  ]}
                />
                <div className="flex justify-end py-4">
                  <Link
                    href={"/"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-lg text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1>Pengabdian Masyarakat</h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 divide-y text-xs">
                <Table
                  columns={[
                    { key: "id", title: "No" },
                    { key: "judul_litabmas", title: "Judul Litabmas" },
                    { key: "tahun_anggaran", title: "Tahun Anggaran" },
                  ]}
                  data={[
                    {
                      id: 1,
                      judul_litabmas:
                        "Pemanfaatan Sampah Plastik Serta Pewadahan Secara Komunal Di RT 042 Kelurahan Batu Ampar Balikpapan Utara",
                      tahun_anggaran: "2022",
                    },
                    {
                      id: 2,
                      judul_litabmas:
                        "Pemetaan Pembangunan Infrastruktur Telekomunikasi oleh Inspektoral Jenderal, Kementerian Komunikasi dan Informatika",
                      tahun_anggaran: "2021",
                    },
                    {
                      id: 3,
                      judul_litabmas:
                        "Pemetaan Pembangunan Infrastruktur Telekomunikasi oleh Inspektoral Jenderal, Kementerian Komunikasi dan Informatika",
                      tahun_anggaran: "2021",
                    },
                    {
                      id: 4,
                      judul_litabmas:
                        "Pembuatan Aplikasi Sistem Informasi Capaian Gotong Royong Masyarakat Kecamatan Balikpapan Utara",
                      tahun_anggaran: "2021",
                    },
                    {
                      id: 5,
                      judul_litabmas:
                        "Pendampingan Pendidikan TIK pada masyarakat Desa Padang Pangrapat sebagai desa binaan untuk meningkatkan daya saing di era society 5.0",
                      tahun_anggaran: "2020",
                    },
                  ]}
                />
                <div className="flex justify-end py-4">
                  <Link
                    href={"/"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-lg text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1>Visiting Scientist</h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 divide-y">
                <div className="bg-blue-300 p-4 rounded-xl">Tidak ada data</div>
                <div className="flex justify-end py-4">
                  <Link
                    href={"/"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-lg text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

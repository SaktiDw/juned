import { CardDataPribadi, MainLayout } from "@/components";
import Image from "next/image";
import React from "react";

const DataPribadi = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4">
        <div className="grid grid-flow-col items-stretch gap-4">
          <CardDataPribadi
            title={"profile"}
            data={[
              { title: "Nama", text: "Patrick Star" },
              { title: "Jenis Kelamin", text: "Laki-Laki" },
              { title: "NIDN", text: "0007099001" },
              {
                title: "Tempat, tanggal lahir",
                text: "Samarinda, 07 September 1990",
              },
              { title: "Ibu Kandung", text: "Sukartini" },
            ]}
          >
            <div className="relative w-full h-[300px]">
              <Image
                fill
                alt={"profile"}
                src={"/images.jpg"}
                className={`rounded-xl shadow-lg  hover:scale-110 duration-200 ease-in-out object-cover`}
              />
            </div>
          </CardDataPribadi>
          <CardDataPribadi
            title={"Alamat dan kontak"}
            data={[
              { title: "Email", text: "tegar@lecturer.itk.ac.id" },
              { title: "Alamat", text: "Komp Pondok Joang Indah Blok A5/14" },
              { title: "RT", text: "54" },
              { title: "RW", text: "1" },
              { title: "Dusun", text: "(Tidak ada data)" },
              { title: "Desa/Kelurahan", text: "Karang Joang" },
              { title: "Kota/Kabupaten", text: "Kec. Balikpapan Utara" },
              { title: "Provinsi", text: "Kota Balikpapan" },
              { title: "Kode Pos", text: "(Tidak ada data)" },
              { title: "No. Telepon Rumah", text: "(Tidak ada data)" },
              { title: "No. HP", text: "082245051582" },
            ]}
          />
          <CardDataPribadi
            title={"kepegawaian"}
            data={[
              { title: "Program Studi", text: "Informatika" },
              { title: "NIP (khusus PNS)", text: "199009072019031014" },
              { title: "Status Kepegawaian", text: "PNS" },
              { title: "Status Keaktifan", text: "Aktif" },
              { title: "Nomor SK CPNS", text: "3256/M/KP/2019" },
              {
                title: "SK CPNS Terhitung Mulai Tanggal",
                text: "01 Maret 2019",
              },
              { title: "Nomor SK TMMD", text: "9746/IT10R/KP11/2017" },
              {
                title: "Tanggal Mulai Menjadi Dosen (TMMD)",
                text: "02 Oktober 2017",
              },
              { title: "Pangkat/Golongan", text: "Penata Muda Tk. I - III/b" },
              { title: "Sumber Gaji", text: "APBN" },
            ]}
          />
        </div>
        <div className="flex gap-4">
          <CardDataPribadi
            title={"kependudukan"}
            data={[
              { title: "Nik", text: "6472050709900005" },
              { title: "Agama", text: "Islam" },
              { title: "Kewarganegaraan", text: "Indonesia" },
            ]}
          />
          <CardDataPribadi
            title={"Lain-lain"}
            data={[
              { title: "NPWP", text: "828655803722000" },
              { title: "Nama Wajib Pajak", text: "Tegar Palyus Fiqar" },
              { title: "SINTA ID", text: "6104936 " },
            ]}
          />
        </div>

        <CardDataPribadi
          title={"keluarga"}
          data={[
            { title: "Status Perkawinan", text: "Kawin" },
            { title: "Nama Suami/Istri", text: "Umi Sholikah" },
            { title: "NIP Suami/Istri", text: "198904242019032020" },
            { title: "Pekerjaan Suami/Istri", text: "PNS/TNI/Polri" },
            {
              title: "Terhitung Mulai Tanggal PNS Suami/Istri",
              text: "(Tidak ada data)",
            },
          ]}
        />
        <CardDataPribadi
          title={"Bidang keilmuan"}
          data={[
            {
              title: "[140408]",
              text: "[140408] Teknologi Informasi dan Komunikasi - Teknik Sistem Informasi -- Keamanan Informasi",
            },
          ]}
        />
      </div>
    </MainLayout>
  );
};

export default DataPribadi;

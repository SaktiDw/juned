import { CardDataPribadi, MainLayout } from "@/components";
import {
  fetchAlamat,
  fetchKeluarga,
  fetchKepegawaian,
  fetchKependudukan,
  fetchLainLain,
  fetchProfil,
} from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const DataPribadi = () => {
  const { data: alamat } = useQuery({
    queryKey: ["alamat"],
    queryFn: async () => await fetchAlamat(),
  });
  const { data: profil } = useQuery({
    queryKey: ["profil"],
    queryFn: async () => await fetchProfil(),
  });
  const { data: kependudukan } = useQuery({
    queryKey: ["kependudukan"],
    queryFn: async () => await fetchKependudukan(),
  });
  const { data: lain } = useQuery({
    queryKey: ["lain"],
    queryFn: async () => await fetchLainLain(),
  });
  const { data: keluarga } = useQuery({
    queryKey: ["keluarga"],
    queryFn: async () => await fetchKeluarga(),
  });
  const { data: kepegawaian } = useQuery({
    queryKey: ["kepegawaian"],
    queryFn: async () => await fetchKepegawaian(),
  });

  return (
    <MainLayout>
      <div className="flex flex-col gap-4">
        <div className="grid grid-flow-col items-stretch gap-4">
          <CardDataPribadi
            title={"profile"}
            data={[
              { title: "Nama", text: profil?.data.nama },
              { title: "Jenis Kelamin", text: profil?.data.jenis_kelamin },
              { title: "NIDN", text: profil?.data.nidn },
              {
                title: "Tempat, tanggal lahir",
                text:
                  profil?.data.tempat_lahir + ", " + profil?.data.tanggal_lahir,
              },
              { title: "Ibu Kandung", text: profil?.data.nama_ibu_kandung },
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
              { title: "Email", text: alamat?.data.email },
              { title: "Alamat", text: alamat?.data.alamat },
              { title: "RT", text: alamat?.data.rt },
              { title: "RW", text: alamat?.data.rw },
              { title: "Dusun", text: alamat?.data.dusun },
              { title: "Desa/Kelurahan", text: alamat?.data.kelurahan },
              { title: "Kota/Kabupaten", text: alamat?.data.id_kota_kabupaten },
              { title: "Provinsi", text: alamat?.data.id_kota_kabupaten },
              { title: "Kode Pos", text: alamat?.data.kode_pos },
              { title: "No. Telepon Rumah", text: alamat?.data.telpon_rumah },
              { title: "No. HP", text: alamat?.data.telpon_hp },
            ]}
          />
          <CardDataPribadi
            title={"kepegawaian"}
            data={[
              { title: "Program Studi", text: kepegawaian?.data.program_studi },
              { title: "NIP (khusus PNS)", text: kepegawaian?.data.nip },
              {
                title: "Status Kepegawaian",
                text: kepegawaian?.data.status_kepegawaian,
              },
              {
                title: "Status Keaktifan",
                text: kepegawaian?.data.status_keaktifan,
              },
              { title: "Nomor SK CPNS", text: kepegawaian?.data.sk_cpns },
              {
                title: "SK CPNS Terhitung Mulai Tanggal",
                text: kepegawaian?.data.tanggal_sk_cpns,
              },
              { title: "Nomor SK TMMD", text: kepegawaian?.data.sk_tmmd },
              {
                title: "Tanggal Mulai Menjadi Dosen (TMMD)",
                text: kepegawaian?.data.tanggal_sk_tmmd,
              },
              {
                title: "Pangkat/Golongan",
                text: kepegawaian?.data.pangkat_golongan,
              },
              { title: "Sumber Gaji", text: kepegawaian?.data.sumber_gaji },
            ]}
          />
        </div>
        <div className="flex gap-4">
          <CardDataPribadi
            title={"kependudukan"}
            data={[
              { title: "Nik", text: kependudukan?.data.nik },
              { title: "Agama", text: kependudukan?.data.agama },
              {
                title: "Kewarganegaraan",
                text: kependudukan?.data.kewarganegaraan,
              },
            ]}
          />
          <CardDataPribadi
            title={"Lain-lain"}
            data={[
              { title: "NPWP", text: lain?.data.npwp },
              { title: "Nama Wajib Pajak", text: lain?.data.nama_npwp },
              { title: "SINTA ID", text: lain?.data.sinta_id },
            ]}
          />
        </div>

        <CardDataPribadi
          title={"keluarga"}
          data={[
            { title: "Status Perkawinan", text: keluarga?.data.status_kawin },
            { title: "Nama Suami/Istri", text: keluarga?.data.nama_pasangan },
            { title: "NIP Suami/Istri", text: keluarga?.data.nip_pasangan },
            {
              title: "Pekerjaan Suami/Istri",
              text: keluarga?.data.pekerjaan_pasangan,
            },
            {
              title: "Terhitung Mulai Tanggal PNS Suami/Istri",
              text: keluarga?.data.tanggal_mulai_pns,
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

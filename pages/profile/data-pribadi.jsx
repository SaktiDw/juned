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
import { useRouter } from "next/router";
import React from "react";

const DataPribadi = () => {
  const router = useRouter();
  const id = "a0a07ef9-1a61-46d2-b00b-ea4d580e714a";
  const { data: alamat } = useQuery({
    queryKey: ["alamat"],
    queryFn: async () => await fetchAlamat(id),
  });
  const { data: profil } = useQuery({
    queryKey: ["profil"],
    queryFn: async () => await fetchProfil(id),
  });
  const { data: kependudukan } = useQuery({
    queryKey: ["kependudukan"],
    queryFn: async () => await fetchKependudukan(id),
  });
  const { data: lain } = useQuery({
    queryKey: ["lain"],
    queryFn: async () => await fetchLainLain(id),
  });
  const { data: keluarga } = useQuery({
    queryKey: ["keluarga"],
    queryFn: async () => await fetchKeluarga(id),
  });
  const { data: kepegawaian } = useQuery({
    queryKey: ["kepegawaian"],
    queryFn: async () => await fetchKepegawaian(id),
  });

  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <div className="grid grid-flow-col items-stretch gap-8">
          <CardDataPribadi
            title={"profile"}
            data={[
              { title: "Nama", text: profil?.data[0].pegawai.nama_sdm },
              { title: "Jenis Kelamin", text: profil?.data[0].jenis_kelamin },
              { title: "NIDN", text: profil?.data[0].pegawai.nidn },
              {
                title: "Tempat, tanggal lahir",
                text:
                  profil?.data[0].tempat_lahir +
                  ", " +
                  profil?.data[0].tanggal_lahir,
              },
              { title: "Ibu Kandung", text: profil?.data[0].nama_ibu_kandung },
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
              { title: "Email", text: alamat?.data[0].email },
              { title: "Alamat", text: alamat?.data[0].alamat },
              { title: "RT", text: alamat?.data[0].rt },
              { title: "RW", text: alamat?.data[0].rw },
              { title: "Dusun", text: alamat?.data[0].dusun },
              { title: "Desa/Kelurahan", text: alamat?.data[0].kelurahan },
              {
                title: "Kota/Kabupaten",
                text: alamat?.data[0].id_kota_kabupaten,
              },
              { title: "Provinsi", text: alamat?.data[0].id_kota_kabupaten },
              { title: "Kode Pos", text: alamat?.data[0].kode_pos },
              {
                title: "No. Telepon Rumah",
                text: alamat?.data[0].telpon_rumah,
              },
              { title: "No. HP", text: alamat?.data[0].telpon_hp },
            ]}
          />
          <CardDataPribadi
            title={"kepegawaian"}
            data={[
              {
                title: "Program Studi",
                text: kepegawaian?.data[0]?.program_studi,
              },
              { title: "NIP (khusus PNS)", text: kepegawaian?.data[0]?.nip },
              {
                title: "Status Kepegawaian",
                text: kepegawaian?.data[0]?.status_kepegawaian,
              },
              {
                title: "Status Keaktifan",
                text: kepegawaian?.data[0]?.status_keaktifan,
              },
              { title: "Nomor SK CPNS", text: kepegawaian?.data[0]?.sk_cpns },
              {
                title: "SK CPNS Terhitung Mulai Tanggal",
                text: kepegawaian?.data[0]?.tanggal_sk_cpns,
              },
              { title: "Nomor SK TMMD", text: kepegawaian?.data[0]?.sk_tmmd },
              {
                title: "Tanggal Mulai Menjadi Dosen (TMMD)",
                text: kepegawaian?.data[0]?.tanggal_sk_tmmd,
              },
              {
                title: "Pangkat/Golongan",
                text: kepegawaian?.data[0]?.pangkat_golongan,
              },
              { title: "Sumber Gaji", text: kepegawaian?.data[0]?.sumber_gaji },
            ]}
          />
        </div>
        <div className="flex gap-8">
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

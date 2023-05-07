import React from "react";
import { Formik, Form } from "formik";
import {
  Action,
  Button,
  Input,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  NestedList,
  PerguruanTinggiSelection,
  Select,
  StackedTab,
  Table,
  Textarea,
} from "..";
import * as yup from "yup";
import { createUser, fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { dateFormater } from "@/helper/constant";

const schema = yup.object().shape({
  kategori_kegiatan: yup.string().required("kategori kegiatan wajib di isi."),
  nama_perguruan_tinggi: yup.string().required("nama organisasi wajib di isi."),
  nama_program_studi: yup.string().required("nama_program_studi wajib di isi."),
  gelar_akademik: yup.string().required("mulai keanggotaan wajib di isi."),
  tanggal_selesai_keanggotaan: yup
    .string()
    .required("selesai keanggotaan wajib di isi."),
  instansi_profesi: yup.string().required("instansi profesi wajib di isi."),
});

const FormCreatePendidikanFormal = ({ initialValues }) => {
  const router = useRouter();
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          kategori_kegiatan: initialValues?.id_kategori_kegiatan || "",
          nama_perguruan_tinggi: initialValues?.nama_perguruan_tinggi || "",
          nama_program_studi: initialValues?.nama_program_studi || "",
          gelar_akademik: initialValues?.gelar_akademik || "",
          tahun_masuk: initialValues?.tahun_masuk || "",
          tahun_lulus: initialValues?.tahun_lulus || "",
          tanggal_lulus: initialValues?.tanggal_lulus || "",
          nomor_induk: initialValues?.nomor_induk || "",
          jumlah_semester: initialValues?.jumlah_semester || "",
          jumlah_sks: initialValues?.jumlah_sks || "",
          ipk: initialValues?.ipk || "",
          sk_penyetaraan: initialValues?.sk_penyetaraan || "",
          tanggal_sk_penyetaraan: initialValues?.tanggal_sk_penyetaraan || "",
          nomor_ijazah: initialValues?.nomor_ijazah || "",
          judul_tugas_akhir: initialValues?.judul_tugas_akhir || "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            <Input
              label="perguruan tinggi"
              name="nama_perguruan_tinggi"
              type="text"
              value={initialValues?.nama_perguruan_tinggi}
              errors={errors.nama_perguruan_tinggi}
              touched={touched.nama_perguruan_tinggi}
            />
            <Input
              label="prgoram studi"
              name="nama_program_studi"
              type="text"
              value={initialValues?.nama_program_studi}
              errors={errors.nama_program_studi}
              touched={touched.nama_program_studi}
            />
            <Input
              label="gelar akademik"
              name="gelar_akademik"
              type="text"
              value={initialValues?.gelar_akademik}
              errors={errors.gelar_akademik}
              touched={touched.gelar_akademik}
            />
            <Input
              label="tahun masuk"
              name="tahun_masuk"
              type="number"
              value={initialValues?.tahun_masuk}
              errors={errors.tahun_masuk}
              touched={touched.tahun_masuk}
            />
            <Input
              label="tahun lulus"
              name="tahun_lulus"
              type="number"
              value={initialValues?.tahun_lulus}
              errors={errors.tahun_lulus}
              touched={touched.tahun_lulus}
            />
            <Input
              label="tanggal kelulusan"
              name="tanggal_lulus"
              type="date"
              value={initialValues?.tanggal_lulus}
              errors={errors.tanggal_lulus}
              touched={touched.tanggal_lulus}
            />
            <Input
              label="nomor induk"
              name="nomor_induk"
              type="text"
              value={initialValues?.nomor_induk}
              errors={errors.nomor_induk}
              touched={touched.nomor_induk}
            />
            <Input
              label="jumlah semester tempuh"
              name="jumlah_semester"
              type="text"
              value={initialValues?.jumlah_semester}
              errors={errors.jumlah_semester}
              touched={touched.jumlah_semester}
            />
            <Input
              label="jumlah sks tempuh"
              name="jumlah_sks"
              type="text"
              value={initialValues?.jumlah_sks}
              errors={errors.jumlah_sks}
              touched={touched.jumlah_sks}
            />
            <Input
              label="IPK kelulusan"
              name="ipk"
              type="text"
              value={initialValues?.ipk}
              errors={errors.ipk}
              touched={touched.ipk}
            />
            <Input
              label="Nomor SK Penyetaraan"
              name="sk_penyetaraan"
              type="text"
              value={initialValues?.sk_penyetaraan}
              errors={errors.sk_penyetaraan}
              touched={touched.sk_penyetaraan}
            />
            <Input
              label="Tanggal SK Penyetaraan"
              name="tanggal_sk_penyetaraan"
              type="text"
              value={initialValues?.tanggal_sk_penyetaraan}
              errors={errors.tanggal_sk_penyetaraan}
              touched={touched.tanggal_sk_penyetaraan}
            />
            <Input
              label="Nomor Ijazah"
              name="nomor_ijazah"
              type="text"
              value={initialValues?.nomor_ijazah}
              errors={errors.nomor_ijazah}
              touched={touched.nomor_ijazah}
            />
            <Input
              label="Judul Tesis/Disertasi"
              name="judul_tugas_akhir"
              type="text"
              value={initialValues?.judul_tugas_akhir}
              errors={errors.judul_tugas_akhir}
              touched={touched.judul_tugas_akhir}
            />
            <MultipleUploadFile data={initialValues?.dokumen}>
              {router.pathname.includes("edit") && initialValues?.dokumen && (
                <Table
                  columns={[
                    { key: "id", title: "No.", dataType: "numbering" },
                    { key: "nama_file", title: "nama file" },
                    { key: "jenis_file", title: "jenis file" },
                    {
                      key: "tanggal_upload",
                      title: "tanggal_upload",
                      render: (val) => dateFormater(val.tanggal_upload),
                    },
                    { key: "jenis_dokumen", title: "jenis_dokumen" },
                    {
                      key: "action",
                      title: "action",
                      render: (val) => (
                        <Action
                          param={val}
                          baseUrl={"/dokumen"}
                          action={["detail", "edit", "delete"]}
                        />
                      ),
                    },
                  ]}
                  data={initialValues?.dokumen}
                />
              )}
            </MultipleUploadFile>
            <Button
              disabled={!isValid}
              type={"submit"}
              text={isSubmitting ? "Loading..." : "Ajukan perubahan"}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormCreatePendidikanFormal;

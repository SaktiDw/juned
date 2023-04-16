import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Input,
  JabatanFungsionalSelection,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  Select,
} from "..";
import * as yup from "yup";
import { createUser } from "@/helper/api/api";

const schema = yup.object().shape({
  kategori_kegiatan: yup.string().required("kategori kegiatan wajib di isi."),
  judul: yup.string().required("judul wajib di isi."),
  afiliasi: yup.string().required("afiliasi wajib di isi."),
  kelompok_bidang: yup.string().required("kelompok bidang wajib di isi."),
  litabmas_sebelumnya: yup
    .string()
    .required("litabmas sebelumnya wajib di isi."),
  jenis_skim: yup.string().required("jenis skim wajib di isi."),
  lokasi: yup.string().required("lokasi kegiatan wajib di isi."),
  tahun_usulan: yup.string().required("tahun usulan wajib di isi."),
  tahun_kegiatan: yup.string().required("tahun kegiatan wajib di isi."),
  tahun_pelaksanaan: yup.string().required("tahun pelaksanaan wajib di isi."),
  dana_dikti: yup.string().required("dana dikti wajib di isi."),
  dana_perguruan_tinggi: yup
    .string()
    .required("dana perguruan tinggi wajib di isi."),
  dana_institusi_lain: yup
    .string()
    .required("dana institusi lain wajib di isi."),
  in_kind: yup.string().required("in kind wajib di isi."),
  sk_penugasan: yup.string().required("sk penugasan wajib di isi."),
  tanggal_sk_penugasan: yup
    .string()
    .required("tanggal sk penugasan wajib di isi."),
  mitra_litabmas: yup.string().required("mitra litabmas wajib di isi."),
});

const FormCreatePenelitian = ({ initialValues }) => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          kategori_kegiatan: initialValues?.id_jabatan_fungsional || "",
          judul: initialValues?.judul || "",
          afiliasi: initialValues?.afiliasi || "",
          kelompok_bidang: initialValues?.kelompok_bidang || "",
          litabmas_sebelumnya: initialValues?.litabmas_sebelumnya || "",
          jenis_skim: initialValues?.jenis_skim || "",
          lokasi: initialValues?.lokasi || "",
          tahun_usulan: initialValues?.tahun_usulan || "",
          tahun_kegiatan: initialValues?.tahun_kegiatan || "",
          tahun_pelaksanaan: initialValues?.tahun_pelaksanaan || "",
          tahun_pelaksanaan_ke: initialValues?.tahun_pelaksanaan_ke || "",
          dana_dikti: initialValues?.dana_dikti || "",
          dana_perguruan_tinggi: initialValues?.dana_perguruan_tinggi || "",
          dana_institusi_lain: initialValues?.dana_institusi_lain || "",
          in_kind: initialValues?.in_kind || "",
          sk_penugasan: initialValues?.sk_penugasan || "",
          tanggal_sk_penugasan: initialValues?.tanggal_sk_penugasan || "",
          mitra_litabmas: initialValues?.mitra_litabmas[0].nama || "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) =>
          createUser(values)
            .then((res) => setStatus(res.data))
            .catch(
              (err) => err
              // err.status === "422" && setErrors(err.response.data.message)
            )
        }
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            <KategoriKegiatanSelection
              name={"kategori_kegiatan"}
              value={initialValues?.id_kategori_kegiatan}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Input
              label="Judul Kegiatan"
              name="judul"
              type="text"
              errors={errors.judul}
              touched={touched.judul}
            />
            <Input
              label="kelompok bidang"
              name="kelompok_bidang"
              type="text"
              errors={errors.kelompok_bidang}
              touched={touched.kelompok_bidang}
            />
            <Input
              label="afiliasi"
              name="afiliasi"
              type="text"
              errors={errors.afiliasi}
              touched={touched.afiliasi}
            />
            <Input
              label="litabmas sebelumnya"
              name="litabmas_sebelumnya"
              type="text"
              errors={errors.litabmas_sebelumnya}
              touched={touched.litabmas_sebelumnya}
            />
            <Input
              label="jenis skim"
              name="jenis_skim"
              type="text"
              errors={errors.jenis_skim}
              touched={touched.jenis_skim}
            />
            <Input
              label="lokasi kegiatan"
              name="lokasi"
              type="text"
              errors={errors.lokasi}
              touched={touched.lokasi}
            />
            <Input
              label="tahun usulan"
              name="tahun_usulan"
              type="number"
              errors={errors.tahun_usulan}
              touched={touched.tahun_usulan}
            />
            <Input
              label="tahun kegiatan"
              name="tahun_kegiatan"
              type="number"
              errors={errors.tahun_kegiatan}
              touched={touched.tahun_kegiatan}
            />
            <Input
              label="tahun pelaksanaan"
              name="tahun_pelaksanaan"
              type="number"
              errors={errors.tahun_pelaksanaan}
              touched={touched.tahun_pelaksanaan}
            />
            <Input
              label="lama kegiatan (tahun)"
              name="lama_kegiatan"
              type="number"
              errors={errors.lama_kegiatan}
              touched={touched.lama_kegiatan}
            />
            <Input
              label="tahun pelaksanaan ke"
              name="tahun_pelaksanaan_ke"
              type="number"
              errors={errors.tahun_pelaksanaan_ke}
              touched={touched.tahun_pelaksanaan_ke}
            />
            <Input
              label="dana dari dikti (Rp.)"
              name="dana_dikti"
              type="number"
              errors={errors.dana_dikti}
              touched={touched.dana_dikti}
            />
            <Input
              label="dana dari perguruan_tinggi (Rp.)"
              name="dana_perguruan_tinggi"
              type="number"
              errors={errors.dana_perguruan_tinggi}
              touched={touched.dana_perguruan_tinggi}
            />
            <Input
              label="dana dari institusi_lain (Rp.)"
              name="dana_institusi_lain"
              type="number"
              errors={errors.dana_institusi_lain}
              touched={touched.dana_institusi_lain}
            />
            <Input
              label="in kind"
              name="in_kind"
              type="text"
              errors={errors.in_kind}
              touched={touched.in_kind}
            />
            <Input
              label="no sk penugasan"
              name="sk_penugasan"
              type="text"
              errors={errors.sk_penugasan}
              touched={touched.sk_penugasan}
            />
            <Input
              label="tanggal sk penugasan"
              name="tanggal_sk_penugasan"
              type="date"
              errors={errors.tanggal_sk_penugasan}
              touched={touched.tanggal_sk_penugasan}
            />
            <Input
              label="mitra litabmas"
              name="mitra_litabmas"
              type="text"
              errors={errors.mitra_litabmas}
              touched={touched.mitra_litabmas}
            />
            <MultipleUploadFile />
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

export default FormCreatePenelitian;
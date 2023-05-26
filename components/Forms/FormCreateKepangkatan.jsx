import React from "react";
import { Formik, Form } from "formik";
import { Button, Input, MultipleUploadFile, Select, Selector } from "..";
import * as yup from "yup";
import { fetchGolonganPangkat } from "@/helper/api/apiSister";

const schema = yup.object().shape({
  dokumen: yup.array().of(
    yup
      .object()
      .shape({
        id_jenis_dokumen: yup.string().required("jenis dokumen wajib diisi."),
        file: yup.string().required("file wajib diisi."),
        nama: yup.string().required("nama dokumen wajib diisi."),
        tautan: yup.string().required("tautan wajib diisi."),
        keterangan: yup.string().required("keterangan wajib diisi."),
      })
      .required("dokumen wajib diisi.")
  ),
  pangkat_golongan: yup.string().required("golongan pangkat wajib diisi."),
  sk: yup.string().required("sk wajib diisi."),
  tanggal_sk: yup.string().required("kelebihan pengajaran sk wajib diisi."),
  tanggal_mulai: yup.string().required("terhitung mulai tanggal wajib diisi."),
  masa_kerja_tahun: yup.string().required("kelebihan penelitian wajib diisi."),
  masa_kerja_bulan: yup
    .string()
    .required("kelebihan pengabdian masyarakat wajib diisi."),
});

const FormCreateKepangkatan = ({ initialValues }) => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          dokumen: [],
          id_pangkat_golongan: initialValues?.id_pangkat_golongan || "",
          sk: initialValues?.sk || "",
          tanggal_sk: initialValues?.tanggal_sk || "",
          tanggal_mulai: initialValues?.tanggal_mulai || "",
          masa_kerja_tahun: initialValues?.masa_kerja_tahun || "",
          masa_kerja_bulan: initialValues?.masa_kerja_bulan || "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({
          isSubmitting,
          errors,
          touched,
          values,
          isValid,
          setFieldValue,
        }) => (
          <Form className="flex flex-col gap-4">
            <Selector
              label="Golongan/Pangkat"
              placeholder={"Pilih Golongan/Pangkat"}
              name={"id_pangkat_golongan"}
              errors={errors.id_pangkat_golongan}
              touched={touched.id_pangkat_golongan}
              queryKey={"fetchGolonganPangkat"}
              queryFn={() => fetchGolonganPangkat()}
              onChange={setFieldValue}
              labelKey={"nama"}
              valueKey={"id"}
            />
            <Input
              label="nomor sk"
              name="sk"
              type="text"
              errors={errors.sk}
              touched={touched.sk}
            />
            <Input
              label="terhitung mulai tanggal"
              name="tanggal_mulai"
              type="date"
              errors={errors.tanggal_mulai}
              touched={touched.tanggal_mulai}
            />
            <Input
              label="tanggal sk"
              name="tanggal_sk"
              type="date"
              errors={errors.tanggal_sk}
              touched={touched.tanggal_sk}
            />
            <Input
              label="masa kerja (tahun)"
              name="masa_kerja_tahun"
              type="number"
              errors={errors.masa_kerja_tahun}
              touched={touched.masa_kerja_tahun}
            />
            <Input
              label="masa kerja (bulan)"
              name="masa_kerja_bulan"
              type="number"
              errors={errors.masa_kerja_bulan}
              touched={touched.masa_kerja_bulan}
            />
            <MultipleUploadFile
              values={values}
              errors={errors}
              touched={touched}
            />
            <Button
              disabled={!isValid}
              type={"submit"}
              text={isSubmitting ? "Memuat..." : "Ajukan perubahan"}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormCreateKepangkatan;

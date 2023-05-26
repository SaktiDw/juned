import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Input,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  Select,
} from "..";
import * as yup from "yup";

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
  kategori_kegiatan: yup.string().required("kategori kegiatan wajib diisi."),
  tingkat_penghargaan: yup
    .string()
    .required("tingkat penghargaan wajib diisi."),
  jenis_penghargaan: yup.string().required("jenis penghargaan wajib diisi."),
  nama_penghargaan: yup.string().required("nama penghargaan wajib diisi."),
  tahun: yup.string().required("tahun wajib diisi."),
  instansi_pemberi: yup
    .string()
    .required("bidang ahli pembimbing wajib diisi."),
});

const FormCreatePenghargaan = () => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          dokumen: [],
          kategori_kegiatan: "",
          tingkat_penghargaan: "",
          jenis_penghargaan: "",
          nama_penghargaan: "",
          tahun: "",
          instansi_pemberi: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, values, isValid }) => (
          <Form className="flex flex-col gap-4">
            <KategoriKegiatanSelection
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Select
              label="tingkat penghargaan"
              name="tingkat_penghargaan"
              option={[]}
              errors={errors.tingkat_penghargaan}
              touched={touched.tingkat_penghargaan}
            />
            <Select
              label="jenis penghargaan"
              name="jenis_penghargaan"
              option={[]}
              errors={errors.jenis_penghargaan}
              touched={touched.jenis_penghargaan}
            />
            <Input
              label="nama penghargaan"
              name="nama_penghargaan"
              type="text"
              errors={errors.nama_penghargaan}
              touched={touched.nama_penghargaan}
            />
            <Input
              label="tahun"
              name="tahun"
              type="number"
              errors={errors.tahun}
              touched={touched.tahun}
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

export default FormCreatePenghargaan;

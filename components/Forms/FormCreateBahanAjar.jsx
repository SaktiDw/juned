import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Input,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  NestedList,
  Select,
  StackedTab,
} from "..";
import * as yup from "yup";
import { createUser, fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";

const schema = yup.object().shape({
  dokumen: yup.array().of(
    yup
      .object()
      .shape({
        id_jenis_dokumen: yup.string().required("jenis dokumen wajib di isi."),
        file: yup.string().required("file wajib di isi."),
        nama: yup.string().required("nama wajib di isi."),
        tautan: yup.string().required("tautan wajib di isi."),
        keterangan: yup.string().required("keterangan wajib di isi."),
      })
      .required("dokumen wajib di isi.")
  ),
  golongan_pangkat: yup.string().required("jabatan fungsional wajib di isi."),
  sk: yup.string().required("sk wajib di isi."),
  tanggal_sk: yup.string().required("kelebihan pengajaran sk wajib di isi."),
  terhitung_mulai_tanggal: yup
    .string()
    .required("terhitung mulai tanggal wajib di isi."),
  masa_kerja_tahun: yup.string().required("kelebihan penelitian wajib di isi."),
  masa_kerja_bulan: yup
    .string()
    .required("kelebihan pengabdian masyarakat wajib di isi."),
});

const FormCreateBahanAjar = () => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          dokumen: [],
          golongan_pangkat: "",
          sk: "",
          tanggal_sk: "",
          terhitung_mulai_tanggal: "",
          masa_kerja_tahun: "",
          masa_kerja_bulan: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, values, isValid }) => (
          <Form className="flex flex-col gap-4">
            <KategoriKegiatanSelection
              menu={"bahan_ajar"}
              type={"tree"}
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Select
              label="jenis bahan ajar"
              name="jenis_bahan_ajar"
              option={[]}
              errors={errors.jenis_bahan_ajar}
              touched={touched.jenis_bahan_ajar}
            />
            <MultipleUploadFile
              values={values}
              errors={errors}
              touched={touched}
            />
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

export default FormCreateBahanAjar;

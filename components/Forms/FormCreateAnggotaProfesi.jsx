import React from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Input,
  KategoriKegiatanSelection,
  MultipleUploadFile,
  NestedList,
  PerguruanTinggiSelection,
  Select,
  StackedTab,
  Textarea,
} from "..";
import * as yup from "yup";
import { createUser, fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";

const schema = yup.object().shape({
  kategori_kegiatan: yup.string().required("kategori kegiatan wajib di isi."),
  nama_organisasi: yup.string().required("tingkat penghargaan wajib di isi."),
  peran: yup.string().required("jenis penghargaan wajib di isi."),
  mulai_keanggotaan: yup.string().required("nama penghargaan wajib di isi."),
  selesai_keanggotaan: yup
    .string()
    .required("selesai_keanggotaan wajib di isi."),
  instansi_profesi: yup
    .string()
    .required("bidang ahli pembimbing wajib di isi."),
});

const FormCreateAnggotaProfesi = () => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          kategori_kegiatan: "",
          nama_organisasi: "",
          peran: "",
          mulai_keanggotaan: "",
          selesai_keanggotaan: "",
          instansi_profesi: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, status, isValid }) => (
          <Form className="flex flex-col gap-4">
            <KategoriKegiatanSelection
              errors={errors.kategori_kegiatan}
              touched={touched.kategori_kegiatan}
            />
            <Input
              label="nama organisasi"
              name="nama_organisasi"
              type="text"
              errors={errors.nama_organisasi}
              touched={touched.nama_organisasi}
            />
            <Input
              label="peran"
              name="peran"
              type="text"
              errors={errors.peran}
              touched={touched.peran}
            />
            <Input
              label="mulai keanggotaan"
              name="mulai_keanggotaan"
              type="date"
              errors={errors.mulai_keanggotaan}
              touched={touched.mulai_keanggotaan}
            />
            <Input
              label="selesai keanggotaan"
              name="selesai_keanggotaan"
              type="date"
              errors={errors.selesai_keanggotaan}
              touched={touched.selesai_keanggotaan}
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

export default FormCreateAnggotaProfesi;

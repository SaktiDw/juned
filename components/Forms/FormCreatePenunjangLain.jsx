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
  nama_kegiatan: yup.string().required("nama kegiatan wajib di isi."),
  jenis_kegiatan: yup.string().required("jenis kegiatan wajib di isi."),
  instansi: yup.string().required("instansi wajib di isi."),
  tingkat: yup.string().required("tingkat wajib di isi."),
  sk: yup.string().required("sk di isi."),
  tanggal_mulai: yup.string().required("tanggal mulai di isi."),
  tanggal_selesai: yup.string().required("tanggal selesai di isi."),
});

const FormCreatePenunjangLain = () => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          kategori_kegiatan: "",
          nama_kegiatan: "",
          jenis_kegiatan: "",
          instansi: "",
          tingkat: "",
          sk: "",
          tanggal_mulai: "",
          tanggal_selesai: "",
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
              label="nama kegiatan"
              name="nama_kegiatan"
              type="text"
              errors={errors.jenis_kegiatan}
              touched={touched.nama_kegiatan}
            />
            <Select
              label="jenis kegiatan"
              name="jenis_kegiatan"
              type={[]}
              errors={errors.jenis_kegiatan}
              touched={touched.jenis_kegiatan}
            />
            <Input
              label="instansi"
              name="instansi"
              type="text"
              errors={errors.instansi}
              touched={touched.instansi}
            />
            <Select
              label="tingkat"
              name="tingkat"
              option={[]}
              errors={errors.tingkat}
              touched={touched.tingkat}
            />
            <Input
              label="sk"
              name="sk"
              type="text"
              errors={errors.sk}
              touched={touched.sk}
            />
            <Input
              label="tanggal mulai"
              name="tanggal_mulai"
              type="date"
              errors={errors.tanggal_mulai}
              touched={touched.tanggal_mulai}
            />
            <Input
              label="tanggal selesai"
              name="tanggal_selesai"
              type="date"
              errors={errors.tanggal_selesai}
              touched={touched.tanggal_selesai}
            />
            Anggota Kegiatan (Dosen)
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

export default FormCreatePenunjangLain;

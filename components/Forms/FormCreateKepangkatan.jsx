import React from "react";
import { Formik, Form } from "formik";
import { Button, Input, MultipleUploadFile, Select } from "..";
import * as yup from "yup";
import { createUser, fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";

const schema = yup.object().shape({
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

const FormCreateKepangkatan = () => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          golongan_pangkat: "",
          sk: "",
          tanggal_sk: "",
          terhitung_mulai_tanggal: "",
          masa_kerja_tahun: "",
          masa_kerja_bulan: "",
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
            <Input
              label="jabatan fungsional"
              name="golongan_pangkat"
              type="text"
              errors={errors.golongan_pangkat}
              touched={touched.golongan_pangkat}
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
              name="terhitung_mulai_tanggal"
              type="date"
              errors={errors.terhitung_mulai_tanggal}
              touched={touched.terhitung_mulai_tanggal}
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

export default FormCreateKepangkatan;

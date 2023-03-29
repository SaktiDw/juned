import React from "react";
import { Formik, Form } from "formik";
import { Button, Input, MultipleUploadFile, Select } from "..";
import * as yup from "yup";
import { createUser, fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";

const schema = yup.object().shape({
  jabatan_fungsional: yup.string().required("jabatan fungsional wajib di isi."),
  sk: yup.string().required("sk wajib di isi."),
  kelebihan_pengajaran: yup
    .string()
    .required("kelebihan pengajaran sk wajib di isi."),
  terhitung_mulai_tanggal: yup
    .string()
    .required("terhitung mulai tanggal wajib di isi."),
  kelebihan_penelitian: yup
    .string()
    .required("kelebihan penelitian wajib di isi."),
  kelebihan_pengabdian_masyarakat: yup
    .string()
    .required("kelebihan pengabdian masyarakat wajib di isi."),
  kelebihan_kegiatan_penunjang: yup
    .string()
    .required("kelebihan kegiatan penunjang wajib di isi."),
});

const FormCreateJabatanFungsional = () => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          jabatan_fungsional: "",
          sk: "",
          kelebihan_pengajaran: "",
          terhitung_mulai_tanggal: "",
          kelebihan_penelitian: "",
          kelebihan_pengabdian_masyarakat: "",
          kelebihan_kegiatan_penunjang: "",
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
              name="jabatan_fungsional"
              type="text"
              errors={errors.jabatan_fungsional}
              touched={touched.jabatan_fungsional}
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
              label="kelebihan pengajaran"
              name="kelebihan_pengajaran"
              type="date"
              errors={errors.kelebihan_pengajaran}
              touched={touched.kelebihan_pengajaran}
            />
            <Input
              label="kelebihan penelitian"
              name="kelebihan_penelitian"
              type="number"
              errors={errors.kelebihan_penelitian}
              touched={touched.kelebihan_penelitian}
            />
            <Input
              label="kelebihan pengabdian masyarakat"
              name="kelebihan_pengabdian_masyarakat"
              type="number"
              errors={errors.kelebihan_pengabdian_masyarakat}
              touched={touched.kelebihan_pengabdian_masyarakat}
            />
            <Input
              label="kelebihan kegiatan penunjang"
              name="kelebihan_kegiatan_penunjang"
              type="number"
              errors={errors.kelebihan_kegiatan_penunjang}
              touched={touched.kelebihan_kegiatan_penunjang}
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

export default FormCreateJabatanFungsional;

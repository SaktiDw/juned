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

const FormCreateBahanAjar = () => {
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
            <ul>
              <li>
                Pelaksanaan Pendidikan
                <ul>
                  <li>Mengembangkan Bahan Kuliah</li>
                  <div className="flex gap-2 items-baseline">
                    <input
                      type="radio"
                      name="bahan_kuliah"
                      id="1"
                      className="m-2"
                    />
                    <label htmlFor="1">Buku Ajar (cetak atau elektronik)</label>
                  </div>
                  <div className="flex gap-2 items-baseline">
                    <input
                      type="radio"
                      name="bahan_kuliah"
                      id="2"
                      className="m-2"
                    />
                    <label htmlFor="2">
                      mengembangkan bahan pengajaran/modul/ bahan kuliah yang
                      mempunyai nilai kebaharuan/manual/ pedoman
                      akademik/pedoman pemagangan/pedoman pembelajaran dalam
                      bentuk case study/problem based learning/project based
                      learning
                    </label>
                  </div>
                  <div className="flex gap-2 items-baseline">
                    <input
                      type="radio"
                      name="bahan_kuliah"
                      id="3"
                      className="m-2"
                    />
                    <label htmlFor="3">
                      Mengembangkan bahan pengajaran/modul/ bahan kuliah yang
                      mempunyai nilai kebaharuan/manual/ pedoman
                      akademik/pedoman pemagangan/pedoman pembelajaran
                    </label>
                  </div>
                </ul>
              </li>
              <li>Penunjang Kegiatan Akademik Dosen</li>
            </ul>
            <div className="flex gap-2 items-baseline">
              <input
                type="radio"
                name="menulis_buku_pelajaran"
                id=""
                className="m-2"
              />
              <label htmlFor="">Buku SLTA atau setingkat</label>
            </div>
            <div className="flex gap-2 items-baseline">
              <input
                type="radio"
                name="menulis_buku_pelajaran"
                id=""
                className="m-2"
              />
              <label htmlFor="">Buku SLTP atau setingkat</label>
            </div>
            <div className="flex gap-2 items-baseline">
              <input
                type="radio"
                name="menulis_buku_pelajaran"
                id=""
                className="m-2"
              />
              <label htmlFor="">Buku SD atau setingkat</label>
            </div>
            <Select
              label="jenis bahan ajar"
              name="jenis_bahan_ajar"
              option={[]}
              errors={errors.jenis_bahan_ajar}
              touched={touched.jenis_bahan_ajar}
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

export default FormCreateBahanAjar;

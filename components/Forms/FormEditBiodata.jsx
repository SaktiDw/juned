import React from "react";
import { Formik, Form } from "formik";
import { Button, Input, MultipleUploadFile, Select, UploadFile } from "..";
import * as yup from "yup";
import { createUser, fetchProfil } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";

const schema = yup.object().shape({
  nama: yup.string().required("Nama wajib di isi dan tanpa gelar."),
  jenis_kelamin: yup.string().required("Jenis kelamin wajib di isi."),
  tempat_lahir: yup.string().required("Tempat lahir wajib di isi."),
  tanggal_lahir: yup.date().required("Tanggal lahir wajib di isi."),
  nama_ibu_kandung: yup.string().required("Nama ibu kandung wajib di isi."),
});

const FormEditBiodata = () => {
  const id = "";
  const { data: profil, isLoading } = useQuery({
    queryKey: ["profil"],
    queryFn: async () => await fetchProfil(),
    networkMode: "offlineFirst",
  });
  if (isLoading) return <>Loading!!</>;
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          nama: profil?.data[0].pegawai.nama_sdm,
          jenis_kelamin: profil?.data[0].jenis_kelamin,
          tempat_lahir: profil?.data[0].tempat_lahir,
          tanggal_lahir: profil?.data[0].tanggal_lahir,
          nama_ibu_kandung: profil?.data[0].nama_ibu_kandung,
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
              label="nama"
              name="nama"
              type="text"
              errors={errors.nama}
              touched={touched.nama}
            />
            <Select
              label="jenis kelamin"
              name="jenis_kelamin"
              type="text"
              errors={errors.jenis_kelamin}
              touched={touched.jenis_kelamin}
              option={[
                { value: "L", label: "Laki-laki" },
                { value: "P", label: "Perempuan" },
              ]}
              valueKey={"value"}
              labelKey={"label"}
            />
            <Input
              label="tempat lahir"
              name="tempat_lahir"
              type="text"
              errors={errors.tempat_lahir}
              touched={touched.tempat_lahir}
            />
            <Input
              label="tanggal lahir"
              name="tanggal_lahir"
              type="date"
              errors={errors.tanggal_lahir}
              touched={touched.tanggal_lahir}
            />
            <Input
              label="nama ibu kandung"
              name="nama_ibu_kandung"
              type="text"
              errors={errors.nama_ibu_kandung}
              touched={touched.nama_ibu_kandung}
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

export default FormEditBiodata;

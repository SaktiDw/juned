import React from "react";
import { Formik, Form } from "formik";
import { Button, Input, MultipleUploadFile, Select } from "..";
import * as yup from "yup";
import { createUser, fetchKeluarga } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";

const schema = yup.object().shape({
  status_kawin: yup.string().required("status_kawin wajib di isi."),
  nama_pasangan: yup.string().required("nama_pasangan wajib di isi."),
  nip_pasangan: yup.string().required("nip_pasangan wajib di isi."),
  jenispekerjaan: yup.string().required("jenispekerjaan wajib di isi."),
});

const FormEditKeluarga = () => {
  const id = "";
  const { data: keluarga, isLoading } = useQuery({
    queryKey: ["keluarga"],
    queryFn: async () => await fetchKeluarga(),
  });
  if (isLoading) return <>Loading!!</>;
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          status_kawin: keluarga?.data[0].status_kawin,
          nama_pasangan: keluarga?.data[0].nama_pasangan,
          nip_pasangan: keluarga?.data[0].nip_pasangan,
          jenispekerjaan: keluarga?.data[0].jenispekerjaan.nama,
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
            {JSON.stringify(keluarga)}
            <Input
              label="status_kawin"
              name="status_kawin"
              type="text"
              errors={errors.status_kawin}
              touched={touched.status_kawin}
            />
            <Input
              label="nama_pasangan"
              name="nama_pasangan"
              type="text"
              errors={errors.nama_pasangan}
              touched={touched.nama_pasangan}
            />
            <Input
              label="nip_pasangan"
              name="nip_pasangan"
              type="text"
              errors={errors.nip_pasangan}
              touched={touched.nip_pasangan}
            />
            <Input
              label="jenispekerjaan"
              name="jenispekerjaan"
              type="text"
              errors={errors.jenispekerjaan}
              touched={touched.jenispekerjaan}
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

export default FormEditKeluarga;

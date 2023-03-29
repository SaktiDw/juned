import React from "react";
import { Formik, Form } from "formik";
import { Button, Input, MultipleUploadFile, Select } from "..";
import * as yup from "yup";
import { createUser, fetchKepegawaian } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";

const schema = yup.object().shape({
  nip: yup.string().required("nip wajib di isi."),
  sumbergaji: yup.string().required("sumbergaji wajib di isi."),
  sk_cpns: yup.string().required("sk cpns wajib di isi."),
  tanggal_sk_cpns: yup.string().required("tanggal sk cpns wajib di isi."),
  sk_tmmd: yup.string().required("sk tmmd wajib di isi."),
  tmmd: yup.string().required("tmmd wajib di isi."),
});

const FormEditKepegawaian = () => {
  const id = "";
  const { data: kepegawaian, isLoading } = useQuery({
    queryKey: ["kepegawaian"],
    queryFn: async () => await fetchKepegawaian(),
  });
  if (isLoading) return <>Loading!!</>;
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          nip: kepegawaian?.data[0].pegawai.nip,
          sumbergaji: kepegawaian?.data[0].sumbergaji.nama,
          sk_cpns: kepegawaian?.data[0].sk_cpns,
          tanggal_sk_cpns: kepegawaian?.data[0].tanggal_sk_cpns,
          sk_tmmd: kepegawaian?.data[0].sk_tmmd,
          tmmd: kepegawaian?.data[0].tmmd,
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
            {JSON.stringify(kepegawaian, "", 2)}
            <Input
              label="nip"
              name="nip"
              type="text"
              errors={errors.nip}
              touched={touched.nip}
            />
            <Select
              label="jenis kelamin"
              name="sk_cpns"
              type="text"
              errors={errors.sk_cpns}
              touched={touched.sk_cpns}
              option={[
                { value: "L", label: "Laki-laki" },
                { value: "P", label: "Perempuan" },
              ]}
            />
            <Input
              label="tanggal_sk_cpns"
              name="tanggal_sk_cpns"
              type="text"
              errors={errors.tanggal_sk_cpns}
              touched={touched.tanggal_sk_cpns}
            />
            <Input
              label="sk_tmmd"
              name="sk_tmmd"
              type="text"
              errors={errors.sk_tmmd}
              touched={touched.sk_tmmd}
            />
            <Input
              label="tmmd"
              name="tmmd"
              type="date"
              errors={errors.tmmd}
              touched={touched.tmmd}
            />
            <Input
              label="sumbergaji"
              name="sumbergaji"
              type="text"
              errors={errors.sumbergaji}
              touched={touched.sumbergaji}
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

export default FormEditKepegawaian;

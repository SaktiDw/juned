import React from "react";
import { Formik, Form } from "formik";
import { Button, Input, MultipleUploadFile, Select } from "..";
import * as yup from "yup";
import { createUser, fetchKependudukan } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";

const schema = yup.object().shape({
  agama: yup.string().required("agama wajib di isi."),
  negara: yup.string().required("negara wajib di isi."),
  nik: yup.string().required("nik wajib di isi."),
});

const FormEditKependudukan = () => {
  const id = "";
  const { data: kependudukan, isLoading } = useQuery({
    queryKey: ["kependudukan"],
    queryFn: async () => await fetchKependudukan(),
    networkMode: "offlineFirst",
  });
  if (isLoading) return <>Loading!!</>;
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          agama: kependudukan?.data[0].agama.nama,
          negara: kependudukan?.data[0].negara.nama,
          nik: kependudukan?.data[0].nik,
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
              label="nik"
              name="nik"
              type="text"
              errors={errors.nik}
              touched={touched.nik}
            />
            {/* <Select
              label="agama"
              name="agama"
              type="text"
              errors={errors.agama}
              touched={touched.agama}
              option={[
                { value: "L", label: "Laki-laki" },
                { value: "P", label: "Perempuan" },
              ]}
            /> */}
            <Input
              label="agama"
              name="agama"
              type="text"
              errors={errors.agama}
              touched={touched.agama}
            />
            <Input
              label="negara"
              name="negara"
              type="text"
              errors={errors.negara}
              touched={touched.negara}
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

export default FormEditKependudukan;

import React from "react";
import { Formik, Form } from "formik";
import { Action, Button, Input, MultipleUploadFile, Select, Table } from "..";
import * as yup from "yup";
import { createUser, fetchBidangIlmu } from "@/helper/api/api";
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
  bidangilmu: yup.string().required("bidangilmu wajib di isi."),
});

const FormEditBidangKeilmuan = () => {
  const id = "";
  const { data: bidang_keilmuan, isLoading } = useQuery({
    queryKey: ["bidang_keilmuan"],
    queryFn: async () => await fetchBidangIlmu(),
    networkMode: "offlineFirst",
  });
  if (isLoading) return <>Loading!!</>;
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={[]}
        validationSchema={schema}
        onSubmit={(values, { setErrors, setStatus }) => null}
      >
        {({ isSubmitting, errors, touched, values, isValid }) => (
          <Form className="flex flex-col gap-4">
            <Table
              columns={[
                { key: "urutan", title: "Urutan" },
                {
                  key: "kelompokbidang",
                  title: "Pilih kelompok Bidang",
                  render: (val) => (
                    <Select
                      name="bidangilmu"
                      type="text"
                      errors={errors.bidangilmu}
                      touched={touched.bidangilmu}
                      option={[
                        { value: "L", label: "Laki-laki" },
                        { value: "P", label: "Perempuan" },
                      ]}
                      valueKey={"value"}
                      labelKey={"label"}
                    />
                  ),
                },
                {
                  key: "id",
                  title: "aksi",
                  align: "center",
                  render: (val) => <Action param={val} />,
                },
              ]}
              data={bidang_keilmuan?.data}
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

export default FormEditBidangKeilmuan;

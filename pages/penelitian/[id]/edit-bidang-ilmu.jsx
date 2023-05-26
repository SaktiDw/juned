import { MainLayout, Nav, Button, Selector } from "@/components";
import {
  fetchDetailPenelitian,
  fetchKelompokBidang,
} from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PenelitianEditBidangIlmu = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {}, [router.isReady]);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["penelitian", id],
    queryFn: async () => await fetchDetailPenelitian(id),
    networkMode: "offlineFirst",
  });
  {
    isLoading && <p>Memuat...</p>;
  }
  {
    isError && <p>Error Gagal mengambil data</p>;
  }
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <Nav title={"Ubah Penelitian"} />
        <div className="flex flex-col gap-4 dark:text-white w-full h-full">
          <h1 className="text-md font-bold capitalize">
            Formulir Ubah Penelitian
          </h1>
          <div className="grid grid-flow-row gap-4 bg-white dark:bg-slate-800 px-4 py-8 rounded-xl ">
            <h1 className="text-lg font-bold text-slate-600 dark:text-slate-500">
              {data?.judul}
            </h1>
            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-bold uppercase text-sm">urutan</span>
              </div>
              <Formik
                initialValues={{
                  bidang_ilmu: data?.bidang_ilmu?.id,
                }}
                onSubmit={() => null}
              >
                {({ values, errors, touched, setFieldValue }) => (
                  <Form>
                    <Selector
                      label="Bidang Ilmu"
                      name="bidang_ilmu"
                      placeholder={"Pilih Bidang Ilmu"}
                      value={values.bidang_ilmu}
                      onChange={setFieldValue}
                      queryKey={"bahan_ajar"}
                      queryFn={() => fetchKelompokBidang(true)}
                      valueKey="id"
                      labelKey="nama"
                      errors={errors.bidang_ilmu}
                      touched={touched.bidang_ilmu}
                    />
                  </Form>
                )}
              </Formik>

              <div className="flex flex-col gap-2">
                <span className="font-bold uppercase text-sm">Aksi</span>
                <Button text={"Simpan"} size={"small"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PenelitianEditBidangIlmu;

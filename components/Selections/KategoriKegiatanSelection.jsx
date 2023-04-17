import { fetchDudi, fetchKategoriKegiatan } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Select } from "..";

const KategoriKegiatanSelection = ({ value, type, menu, errors, touched }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["kategori-kegiatan", type, menu],
    queryFn: async () => await fetchKategoriKegiatan(type, menu),
    networkMode: "offlineFirst",
  });
  return (
    <>
      <Select
        label="kategori kegiatan"
        name="kategori_kegiatan"
        option={data}
        errors={errors}
        touched={touched}
        values={value}
        valueKey={"id"}
        labelKey={"nama"}
      />
    </>
  );
};

export default KategoriKegiatanSelection;

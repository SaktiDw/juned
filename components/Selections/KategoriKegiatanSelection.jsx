import { fetchKategoriKegiatan } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Select } from "..";

const KategoriKegiatanSelection = ({ errors, touched }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["kategori-kegiatan"],
    queryFn: async () => await fetchKategoriKegiatan(),
    networkMode: "offlineFirst",
  });
  const option =
    data &&
    data?.data.map((item) => {
      return { value: item.id, label: item.nama };
    });

  return (
    <Select
      label="kategori kegiatan"
      name="kategori_kegiatan"
      option={option}
      errors={errors}
      touched={touched}
    />
  );
};

export default KategoriKegiatanSelection;

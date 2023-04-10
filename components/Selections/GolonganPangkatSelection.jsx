import { fetchGolonganPangkat, fetchPerguruanTinggi } from "@/helper/api/api";
import { api } from "@/helper/api/axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Select } from "..";

const GolonganPangkatSelection = ({ golonganPangkat, errors, touched }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["perguruan-tinggi"],
    queryFn: async () => await fetchGolonganPangkat(),
    initialData: golonganPangkat,
    networkMode: "offlineFirst",
  });
  const option =
    data &&
    data?.data.map((item) => {
      return { value: item.id, label: item.nama };
    });
  return (
    <Select
      label="Golongan/Pangkat"
      name="golongan_pangkat"
      option={option}
      errors={errors}
      touched={touched}
    />
  );
};

export default GolonganPangkatSelection;

export async function getStaticProps() {
  const golonganPangkat = await fetchGolonganPangkat();
  return { props: { golonganPangkat } };
}

import { fetchJabatanFungsional } from "@/helper/api/api";
import { api } from "@/helper/api/axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Select } from "..";

const JabatanFungsionalSelection = ({
  jabatan_fungsional,
  errors,
  touched,
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["jabatan-fungsional"],
    queryFn: async () => await fetchJabatanFungsional(),
    initialData: jabatan_fungsional,
    networkMode: "offlineFirst",
  });
  const option =
    data &&
    data?.data.map((item) => {
      return { value: item.id, label: item.nama };
    });
  return (
    <Select
      label="Jabatan Fungsional"
      name="jabatan_fungsional"
      option={option}
      errors={errors}
      touched={touched}
    />
  );
};

export default JabatanFungsionalSelection;

export async function getStaticProps() {
  const jabatan_fungsional = await fetchJabatanFungsional();
  return { props: { jabatan_fungsional } };
}

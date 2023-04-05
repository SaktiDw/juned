import { fetchPerguruanTinggi } from "@/helper/api/api";
import { api } from "@/helper/api/axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Select } from "..";

const PerguruanTinggiSelection = ({ errors, touched }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["perguruan-tinggi"],
    queryFn: async () => await fetchPerguruanTinggi(),
    networkMode: "offlineFirst",
  });
  const option =
    data &&
    data?.data.map((item) => {
      return { value: item.id, label: item.nama };
    });
  return (
    <Select
      label="Perguruan tinggi pengundang"
      name="ptn_pengundang"
      option={option}
      errors={errors}
      touched={touched}
    />
  );
};

export default PerguruanTinggiSelection;

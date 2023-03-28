import {
  Action,
  Button,
  FilterPageSize,
  MainLayout,
  Nav,
  SearchButton,
  Select,
  Table,
} from "@/components";
import { fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Inpassing = () => {
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(5);

  const {
    data: inpassing,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["inpassing"],
    queryFn: () => fetchListInpassing(),
  });

  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-full">
        <Nav title={"Inpassing"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Inpassing
        </h1>

        <Table
          pageSize={pageSize}
          query={search}
          columns={[
            { key: "id", title: "No." },
            { key: "pangkat_golongan", title: "Pangkat/Golongan" },
            { key: "sk", title: "Nomor SK" },
            { key: "tanggal_sk", title: "Tanggal SK" },
            {
              key: "terhitung_mulai_tanggal",
              title: "Terhitung Mulai Tanggal",
            },
            {
              key: "id",
              title: "Action",
              render: (val) => <Action param={val} />,
            },
          ]}
          data={inpassing?.data}
        />
      </div>
    </MainLayout>
  );
};

export default Inpassing;

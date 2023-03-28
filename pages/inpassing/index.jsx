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
        <h1 className="text-xs uppercase font-bold drop-shadow-lg shadow-white">
          Inpassing
        </h1>
        <div className="flex gap-4">
          <Button icon={<i className="fi-rr-plus"></i>} text={"Tambah"} />
          {/* <button className="flex items-center justify-center gap-2 py-2 px-4 bg-primary rounded-md shadow-xl w-32 text-white"></button> */}
          <SearchButton
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <FilterPageSize onChange={(e) => setPageSize(e.target.value)} />
        </div>
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

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
import { fetchDetailInpassing, fetchListInpassing } from "@/helper/api/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";

const DetailInpassing = () => {
  const router = useRouter();
  const { id } = router.query;
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(5);

  const {
    data: inpassing,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["inpassing"],
    queryFn: () => fetchDetailInpassing(id),
    networkMode: "offlineFirst",
  });

  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full">
        <Nav title={"Detail Inpassing"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Detail Inpassing
        </h1>
        {JSON.stringify(inpassing)}
        {/* <Table
          searchAble={true}
          createLink={"/inpassing/create"}
          columns={[
            { key: "id", title: "No." },
            { key: "pangkat_golongan", title: "Pangkat/Golongan" },
            { key: "sk", title: "Nomor SK" },
            { key: "tanggal_sk", title: "Tanggal SK" },
            {
              key: "tanggal_mulai",
              title: "Terhitung Mulai Tanggal",
            },
            {
              key: "id",
              title: "Action",
              render: (val) => <Action param={val} baseUrl={"/inpassing"} />,
            },
          ]}
          data={inpassing?.data}
        /> */}
      </div>
    </MainLayout>
  );
};

export default DetailInpassing;

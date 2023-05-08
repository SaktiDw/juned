import { Action, Button, MainLayout, Nav, Table } from "@/components";
import { fetchListKepangkatan } from "@/helper/api/api";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const Kepangkatan = () => {
  const router = useRouter();
  const {
    data: Kepangkatan,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["Kepangkatan"],
    queryFn: () => fetchListKepangkatan(id),
    networkMode: "offlineFirst",
  });

  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full">
        <Nav title={"Kepangkatan"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Riwayat Golongan/Pangkat
        </h1>
        <div className="flex justify-between">
          <Button
            size={"small"}
            icon={<i className="fi-rr-time-past pt-1"></i>}
            text="Riwayat Ajuan Perubahan"
            onClick={() =>
              router.push("/kepangkatan/riwayat-ajuan-perubahan-data")
            }
          />
        </div>
        <Table
          createLink={"/kepangkatan/create"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            ,
            { key: "sk", title: "Nomor SK" },
            {
              key: "terhitung_mulai_tanggal",
              title: "Terhitung Mulai Tanggal",
            },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => (
                <Action
                  param={val}
                  baseUrl={"/kepangkatan"}
                  action={["delete", "edit", "detail"]}
                />
              ),
            },
          ]}
          data={Kepangkatan?.data}
        />
      </div>
    </MainLayout>
  );
};

export default Kepangkatan;

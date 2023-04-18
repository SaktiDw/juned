import { Action, Button, MainLayout, Nav, Table } from "@/components";
import { fetchListPengabdian } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Pengabdian = () => {
  const {
    data: pengabdian,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["pengabdian"],
    queryFn: () => fetchListPengabdian(id),
    networkMode: "offlineFirst",
  });
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 dark:text-white w-full h-max">
        <Nav title={"pengabdian"} />
        <h1 className="text-md uppercase font-bold drop-shadow-lg shadow-white">
          Pengabdian
        </h1>

        <Table
          searchAble
          createLink={"/pengabdian"}
          columns={[
            { key: "id", title: "No.", dataType: "numbering" },
            ,
            { key: "judul", title: "judul" },
            {
              key: "bidang_keilmuan",
              title: "bidang keilmuan",
              render: (val) => (
                <div className="flex flex-col gap-2">
                  {val.bidang_keilmuan.map((item, index) => (
                    <div>
                      <span>{index + 1}.</span> <span>{item}</span>
                    </div>
                  ))}
                </div>
              ),
            },
            { key: "tahun_pelaksanaan", title: "tahun pelaksanaan" },
            {
              key: "lama_kegiatan",
              title: "lama kegiatan",
              render: (val) => <span>{val.lama_kegiatan} tahun</span>,
            },
            {
              key: "rubrik_bkd",
              title: "rubrik bkd",
            },
            {
              key: "id",
              title: "Action",
              render: (val) => (
                <Action
                  param={val}
                  baseUrl={"/pengabdian"}
                  action={["delete", "detail", "edit", "edit-bidang-ilmu"]}
                />
              ),
            },
          ]}
          data={pengabdian}
          isLoading={isLoading}
        />
      </div>
    </MainLayout>
  );
};

export default Pengabdian;

import React, { useState } from "react";
import { Button, Input, Select, Textarea, UploadFile } from "..";

const MultipleUploadFile = ({ errors }) => {
  const [files, setFiles] = useState([1]);
  const [isActive, setIsActive] = useState(0);
  return (
    <>
      <label className="uppercase leading-tight font-bold text-sm">
        Upload Dokumen
      </label>
      <div className="flex items-start gap-8">
        <p className="w-1/4">
          Upload Dokumen{" "}
          <span className="text-blue-500 font-semibold">
            (Maksimal total ukuran file dalam sekali proses upload : 5 MB)
          </span>{" "}
          Dokumen yang dilampirkan adalah dokumen wajib dan dokumen yang sesuai
          dengan data yang diusulkan. Dokumen Wajib : - KTP - Kartu Keluarga
        </p>
        <div className="grid w-full gap-4">
          {files.map((item, index) => (
            <div key={index} className="relative flex flex-col gap-4 w-full">
              <h1
                className="bg-primary text-white rounded-lg p-2 cursor-pointer"
                onClick={() =>
                  isActive === index ? setIsActive(-1) : setIsActive(index)
                }
              >
                Dokumen {index + 1}
              </h1>
              <button
                onClick={() => setFiles(files.filter((v, i) => i != index))}
                className="absolute right-2 top-2 z-10 text-white hover:text-red-500"
              >
                <i className="fi-rr-cross"></i>
              </button>
              <div
                className={`${
                  isActive === index ? "grid" : "hidden"
                } grid-cols-1 justify-between gap-4`}
              >
                <div className={`grid grid-cols-2 justify-between gap-4`}>
                  <Input
                    name={`nama_dokumen${index}`}
                    label={"Nama Dokumen"}
                    errors={""}
                    touched={""}
                  />
                  <Select
                    name={`jenis_dokumen${index}`}
                    label={"Jenis Dokumen"}
                    errors={""}
                    touched={""}
                    option={[
                      { label: "KTP", value: "ktp" },
                      { label: "Kartu Keluarga", value: "kk" },
                      { label: "Lainnya", value: "lainnya" },
                    ]}
                  />
                </div>
                <UploadFile />
                <Textarea label={"Keterangan"} />
                <Input
                  name={`tautan_dokumen${index}`}
                  label={"Tautan Dokumen"}
                  errors={""}
                  touched={""}
                />
              </div>
            </div>
          ))}
          <Button
            text={"Tambah Dokumen"}
            onClick={() => setFiles([...files, files.length + 1])}
          />
        </div>
      </div>
    </>
  );
};

export default MultipleUploadFile;

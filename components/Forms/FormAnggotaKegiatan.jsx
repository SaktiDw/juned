import { Field, FieldArray } from "formik";
import React from "react";
import { Table, Input, Button } from "..";

const FormAnggotaKegiatan = ({ name, values, defaultValue }) => {
  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div className="flex flex-col-reverse gap-4">
          <Button
            text={"Tambah Dosen"}
            onClick={() => arrayHelpers.push(defaultValue)}
          />
          <Table
            columns={[
              {
                key: "nama",
                title: "Nama Dosen",
                render: (item, index) => (
                  <Field
                    className="w-full px-4 py-2 rounded bg-white dark:bg-slate-900"
                    placeholder="Nama dosen"
                    key={`${name}.${index}.nama`}
                    name={`${name}.${index}.nama`}
                  />
                ),
              },
              {
                key: "peran",
                title: "Peran",
                render: (item, index) => (
                  <>
                    <Field
                      className="w-full px-4 py-2 rounded bg-white dark:bg-slate-900"
                      placeholder="Peran"
                      key={`${name}.${index}.peran`}
                      name={`${name}.${index}.peran`}
                    />
                    <button
                      className="hidden"
                      type="submit"
                      onClick={() => arrayHelpers.push(defaultValue)}
                    ></button>
                  </>
                ),
              },
              {
                key: "index",
                title: "Aksi",
                render: (item, index) => (
                  <button
                    onClick={() => arrayHelpers.remove(index)}
                    className="flex items-baseline gap-2 text-red-500"
                  >
                    <i className="fi-rr-trash"></i> Remove {index}
                  </button>
                ),
              },
            ]}
            data={values}
          />
        </div>
      )}
    ></FieldArray>
  );
};

export default FormAnggotaKegiatan;

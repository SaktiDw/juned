import { Field } from "formik";
import React from "react";

const Input = ({ name, label, type, errors, touched, values }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="uppercase leading-tight font-bold text-sm"
      >
        {label}
      </label>
      <Field
        type={type ? type : "text"}
        name={name}
        values={values}
        className={`py-2 px-4 rounded-lg shadow-lg outline-none border-2 appearance-none dark:bg-slate-800 ${
          errors
            ? `focus:border-red-500 border-red-500 caret-red-500 `
            : `focus:border-primary border-primary caret-primary `
        }`}
      />
      {errors ? (
        <div className="text-red-500 font-semibold capitalize">{errors}</div>
      ) : null}
    </div>
  );
};

export default Input;

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
        className={`py-2 px-4 rounded-lg shadow-lg outline dark:bg-slate-800 ${
          errors
            ? `outline-red-500 caret-red-500 `
            : ` outline-primary caret-primary `
        }`}
      />
      {errors ? (
        <div className="text-red-500 font-semibold capitalize">{errors}</div>
      ) : null}
    </div>
  );
};

export default Input;

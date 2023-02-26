import { Field } from "formik";
import React from "react";

const Input = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={props.name}
        className="uppercase leading-tight font-bold text-xs"
      >
        {props.label}
      </label>
      <Field
        type={props.type ? props.type : "text"}
        name={props.name}
        className={`py-2 px-4 rounded-lg shadow-lg outline-none ring dark:bg-slate-800 ${
          props.errors ? `ring-red-500` : `ring-blue-500`
        }`}
      />
      {props.errors && props.touched ? (
        <div className="text-red-500 font-semibold">{props.errors}</div>
      ) : null}
    </div>
  );
};

export default Input;

import { Field } from "formik";
import React, { useState } from "react";

const Select = ({ name, label, option, errors, touched, values }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex flex-col gap-2 z-10 relative">
      <label
        htmlFor={name}
        className="uppercase leading-tight font-bold text-sm"
      >
        {label}
      </label>
      <div className="relative flex items-center">
        <Field
          className={`cursor-pointer w-full appearance-none py-2 px-4 rounded-lg shadow-lg outline bg-white dark:bg-slate-800 ${
            errors
              ? `outline-red-500 caret-red-500 `
              : ` outline-primary caret-primary `
          }`}
          as="select"
          name={name}
        >
          {option.map((item) => {
            return (
              <option
                key={item.value}
                selected={item.value === values}
                value={item.value}
              >
                {item.label}
              </option>
            );
          })}
        </Field>
        <i
          className={`fi-rr-angle-small-down absolute right-0 pr-4 pt-1 text-lg z-0`}
        ></i>
      </div>
      {errors ? (
        <div className="text-red-500 font-semibold capitalize">{errors}</div>
      ) : null}
    </div>
  );
};

export default Select;

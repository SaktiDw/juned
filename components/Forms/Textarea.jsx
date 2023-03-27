import React from "react";

const Textarea = ({ name, label, type, errors, touched, values }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label
          htmlFor={name}
          className="uppercase leading-tight font-bold text-xs"
        >
          {label}
        </label>
        <textarea
          className={`py-2 px-4 rounded-lg shadow-lg outline dark:bg-slate-800 ${
            errors
              ? `outline-red-500 caret-red-500 `
              : ` outline-primary caret-primary `
          }`}
          name="keterangan"
          id="keterangan"
          rows="1"
          placeholder="Keterangan"
        ></textarea>
        {errors && touched ? (
          <div className="text-red-500 font-semibold">{errors}</div>
        ) : null}
      </div>
    </>
  );
};

export default Textarea;

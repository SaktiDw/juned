import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";

const Selector = ({
  queryKey,
  queryFn,
  valueKey,
  labelKey,
  label,
  name,
  placeholder,
  onChange,
  errors,
  touched,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
  });

  if (isLoading) return <p>Memuat...</p>;
  if (error) return <p>Error</p>;
  return (
    <div
      className="flex flex-col gap-2"
      tabIndex={0}
      onBlur={() => setOpen(false)}
    >
      <label
        htmlFor={name}
        className="uppercase leading-tight font-bold text-sm"
      >
        {label}
      </label>
      <div className="w-full font-medium h-auto cursor-pointer">
        <div
          onClick={() => setOpen(!open)}
          className={`bg-white dark:bg-slate-800 w-full py-2 px-4 flex items-center justify-between rounded-lg border-2 shadow-lg ${
            !selected && "text-gray-700"
          }${
            errors && touched
              ? `focus:border-red-500 border-red-500 caret-red-500`
              : ` focus:border-primary border-primary caret-primary`
          }`}
        >
          {selected ? selected[labelKey] : placeholder}
          <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
        </div>
        <ul
          className={`bg-white dark:bg-slate-800 mt-2 overflow-y-auto rounded-lg shadow  ${
            open ? "max-h-60" : "max-h-0"
          } `}
        >
          <div className="flex items-center px-2 sticky top-0 bg-white dark:bg-slate-800 shadow-sm">
            <AiOutlineSearch size={18} className="text-gray-700" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setOpen(true)}
              placeholder="Enter item name"
              className="placeholder:text-gray-700 p-2 outline-none w-full dark:bg-slate-800"
            />
          </div>
          {data?.map((item) => (
            <li
              key={item}
              className={`p-2 text-sm hover:bg-sky-600 hover:text-white
              ${
                item[valueKey] === selected[valueKey] && "bg-sky-600 text-white"
              }
              ${item[labelKey]?.includes(inputValue) ? "block" : "hidden"}`}
              onClick={() => {
                if (item[valueKey] !== selected) {
                  setSelected(item);
                  setOpen(false);
                  setInputValue("");
                  onChange(name, item[valueKey]);
                }
              }}
            >
              {item[labelKey]}
            </li>
          ))}
        </ul>
        {errors && touched ? (
          <div className="text-red-500 font-semibold capitalize">{errors}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Selector;

import useToggle from "@/helper/hooks/useToggle";
import React, { useState, useRef, useEffect } from "react";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const data = [
    { name: "John", age: 25, city: "New York" },
    { name: "Jane", age: 30, city: "Los Angeles" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Alice", age: 20, city: "San Francisco" },
  ];

  // const filterData = (key, value) => {
  //   return data.filter((item) => {
  //     // Get all the keys of the current object
  //     const keys = Object.keys(item);
  //     // Check if the current key exists in the object
  //     if (keys.includes(key)) {
  //       // Get the value of the current key in the object
  //       const itemValue = item[key];
  //       // Check if the value matches the given value
  //       if (itemValue === value) {
  //         return true;
  //       }
  //     }
  //     // Return false if the key doesn't exist or value doesn't match
  //     return false;
  //   });
  // };

  const filterData = (query) => {
    return data.filter((item) => {
      // Get all the values of the current object
      const values = Object.values(item);
      // Check if any value contains the query
      for (const value of values) {
        if (
          typeof value === "string" &&
          value.toLowerCase().includes(query.toLowerCase())
        ) {
          return true;
        }
      }
      // Return false if the query doesn't match any value
      return false;
    });
  };
  const pageSize = 3; // Number of items per page
  let currentPage = 1; // Current page number
  let filtered = filterData(search);
  const paginateData = (filtered, page, pageSize) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  };

  currentPage = 2; // Change the current page

  return (
    <>
      {JSON.stringify(data)}
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {search}
      {JSON.stringify(filterData(search))}
      {JSON.stringify(paginateData(data, currentPage, pageSize))}
      {JSON.stringify(paginateData(data, currentPage, pageSize))}
    </>
  );
};

const Dropdown = ({ index, isActive, onClick }) => {
  const { toggle, toggler } = useToggle();
  const handleDropdownClick = () => {
    onClick(index);
    toggler();
  };

  return (
    <div
      className={`dropdown ${isActive ? "bg-red-500" : ""}`}
      onClick={handleDropdownClick}
    >
      Dropdown {index}
      <span>{toggle ? "yo" : "no"}</span>
    </div>
  );
};

export default Sidebar;

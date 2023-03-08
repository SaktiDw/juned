import useToggle from "@/helper/hooks/useToggle";
import React, { useState, useRef, useEffect } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const ref = useRef(null);

  const handleDropdownClick = (index) => {
    setActiveDropdown(index);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setActiveDropdown(null);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sidebar" ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Sidebar</button>
      {isOpen && (
        <div className="dropdowns">
          <Dropdown
            index={1}
            isActive={activeDropdown === 1}
            onClick={handleDropdownClick}
          />
          <Dropdown
            index={2}
            isActive={activeDropdown === 2}
            onClick={handleDropdownClick}
          />
          <Dropdown
            index={3}
            isActive={activeDropdown === 3}
            onClick={handleDropdownClick}
          />
        </div>
      )}
    </div>
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

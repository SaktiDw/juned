import React from "react";

const Button = ({ type, disabled, text, onClick, icon }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="disabled:cursor-not-allowed ring ring-primary rounded-lg py-2 px-4 bg-primary text-white font-semibold shadow-lg"
    >
      {icon} {text}
    </button>
  );
};

export default Button;

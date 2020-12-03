import React from "react";

const Input = ({
  inputId,
  name,
  type,
  text,
  placeholder,
  handleChange,
  value,
}) => {
  return (
    <span>
      <label htmlFor={inputId}>{text}: </label>
      <input
        name={name}
        type={type}
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </span>
  );
};

export default Input;

import React from "react";
import "./Input.scss";

export const Input = ({
  id,
  label,
  type,
  placeholder,
  handleChange,
  value,
  message,
}) => {
  return (
    <div class="form-control">
      <label for={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={handleChange}
        value={value ? value : null}
        required
        className={message?.length > 0 ? "error" : null}
      />
      {message?.length > 0 && <small>{message}</small>}
    </div>
  );
};

export default Input;

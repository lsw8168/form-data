import React from "react";

// onSubmit={this.handleSubmit}

const Input = ({ type, id, label, value, onChange }) => {
  return (
    <>
      <label htmlFor={id}>{label} : </label>
      <input id={id} name={id} type={type} value={value} onChange={onChange} />
    </>
  );
};

export default Input;

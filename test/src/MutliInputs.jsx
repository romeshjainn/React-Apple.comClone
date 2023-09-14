import React, { useState } from "react";

export const MultiInput = () => {
  const [inputValues, setInputValues] = useState({
    uName: "",
    uEmail: "",
    uNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div>
      <p>Name: {inputValues.uName}</p>
      <p>Email: {inputValues.uEmail}</p>
      <p>Number: {inputValues.uNumber}</p>
      <p>Input Values: {JSON.stringify(inputValues)}</p>
      <input
        type="text"
        name="uName"
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="uEmail"
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="uNumber"
        onChange={handleChange}
        placeholder="Number"
      />
    </div>
  );
};

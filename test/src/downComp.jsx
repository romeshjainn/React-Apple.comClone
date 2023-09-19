import React from "react";

export const DownComp = ({ changeEmail }) => {
  const change = (e) => {
    changeEmail(e.target.value);
  };
  return <input type="text" onChange={change} />;
};
import React from "react";

export const NitinChild = ({changeEmail}) => {
  const change = (e) => {
    changeEmail(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={change} />
    </div>
  );
};

import React, { useState } from "react";
import { EgChild } from "./egChild";

export const EgParent = () => {
  const [details, setDetails] = useState({
    uName: "121",
    uEmail: "",
    uNumber: 0,
  });

  const updateProps = (updatedDetails) => {
    console.log(updatedDetails);
    setDetails((xyz) => ({
      ...xyz,
      ...updatedDetails,
    }));
  };

  

  return (
    <div>
      <EgChild updateProps={updateProps} />

      <p>
        My name is {details.uName}, this is my {details.uEmail}, this is my
        {details.uNumber}
      </p>

    </div>
  );
};

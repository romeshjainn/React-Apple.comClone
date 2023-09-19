import React, { useState } from "react";
import { ChildParentType } from "./childParenttype";

export const ParentChildType = () => {
  const [details, setDetails] = useState({
    uName: "Romesh",
    uEmail: "@gmail.com",
    uNumber: "123",
  });

  const takeDetails = (updatedDetails) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      ...updatedDetails,
    }));
  };
  // const takeDetails = (updatedDetails) => {
  //   setDetails(
  //     details.uName = updatedDetails.uName;
  //     details.uName = updatedDetails.uName;
  //     details.uName = updatedDetails.uName;
  //   )
  // };

  return (
    <div>
      <p>{details.uName}</p>
      <p>{details.uEmail}</p>
      <p>{details.uNumber}</p>

      <ChildParentType takeDetails={takeDetails} />
    </div>
  );
};

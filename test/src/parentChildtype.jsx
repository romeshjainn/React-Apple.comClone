import React, { useState } from "react";
import { ChildParentType } from "./childParenttype";

export const ParentChildType = () => {
  const [details, setDetails] = useState({
    uName: "Romesh",
    uEmail: "@gmail.com",
    uNumber: "123",
  });
  const incomingData = {
    vName: "NITIN",
    vEmail: "NITIN@gmail.com",
    vNumber: "321",
  };
    const takeDetails = (incomingData) => {
        setDetails(setDetails.uName = incomingData.vName);    
        setDetails(details.uEmail = incomingData.vEmail);    
        setDetails(details.uNumber = incomingData.vNumber);    
  }
  
  return (
    <div>
      <p>{details.uName}</p>
      <p>{details.uEmail}</p>
      <p>{details.uNumber}</p>
      <ChildParentType takeDetails = {takeDetails} />
    </div>
  );
};

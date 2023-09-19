import React from "react";

export const ChildParentType = ({ takeDetails }) => {
        
    const updateDetails = (e) => {
        takeDetails(e.target.value)
    }
    return <div>
      <input type="text" onChange={updateDetails} />
      {/* <input type="text" onChange={updateDetails} />
      <input type="text" onChange={updateDetails} /> */}
  </div>;
};

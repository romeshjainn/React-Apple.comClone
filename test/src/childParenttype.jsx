import React from "react";

export const ChildParentType = ({ takeDetails }) => {
  const updateName = (e) => {
    const newName = e.target.value;
    takeDetails({ ...takeDetails, uName: newName });
  };

  const updateEmail = (e) => {
    const newEmail = e.target.value;
    takeDetails({ ...takeDetails, uEmail: newEmail });
  };

  const updateNumber = (e) => {
    const newNumber = e.target.value;
    takeDetails({ ...takeDetails, uNumber: newNumber });
  };

  return (
    <div>
      <input type="text" placeholder="name" onChange={updateName} />
      <input type="text" placeholder="email" onChange={updateEmail} />
      <input type="text" placeholder="number" onChange={updateNumber} />
    </div>
  );
};

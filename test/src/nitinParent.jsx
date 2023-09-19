import React from "react";
import { useState } from "react";
import { NitinChild } from "./nitinChild";

export const NitinParent = () => {
  const [email, setEmail] = useState("xyz@gmail.com");
  const changeEmail = (newEmail) => {
    setEmail(newEmail);
  };    
  return (
    <div> 
      <NitinChild changeEmail={changeEmail} />
      <p>this is my {email}</p>
    </div>
  );
};

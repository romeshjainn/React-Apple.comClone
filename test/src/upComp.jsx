import React, { useState } from "react";
import { DownComp } from "./downComp";

export const UpComp = () => {
    const [email, setEmail] = useState("testing");
    const changeEm = (em) => {
        setEmail(em)
    }
    return (
      <div>
        <DownComp changeEmail={changeEm} />
        <p>{email}</p>
      </div>
    );
}
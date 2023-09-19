import React from "react";
import { useState } from "react";
import { ChildHidden } from "./childHidden";

export const ParentHidden = () => {
    const [message, setMessage] = useState("check");
    const changeMessage = (msg) => {
        setMessage(msg)
    }
   return (
     <div>
       <h1>Hello check</h1>
       <ChildHidden changeMessage={changeMessage} />
       <p>{message}</p>
     </div>
   );
}
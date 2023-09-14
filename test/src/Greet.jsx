import React, { useState } from "react";

export const Greet = () => {
  const [message, changeMessage] = useState("Hello");

  const updateMsg = (e) => {
    changeMessage(e.target.value);
  };

  return (
    <div>
      <input type="text" value={message} onChange={updateMsg} />
          <p>{message}</p>
    </div>
  );
};

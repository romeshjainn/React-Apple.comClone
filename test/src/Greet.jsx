import React, { useState } from "react";
import styled from "styled-components";
const Input = styled.input`
  width: 40%;
  padding: 1rem;
  margin-top:1.2rem;
`;
export const Greet = () => {
  const [message, changeMessage] = useState(
    "Welcome Yash to the Shukla's family."
  );

  const updateMsg = (e) => {
    changeMessage(e.target.value);
  };

  return (
    <div>
      <Input type="text" value={message} onChange={updateMsg} />
      <p>{message}</p>
    </div>
  );
};

import React, { useState } from "react";
import styled from "styled-components";

export const Structure = () => {
  const [inputVisible, setInputVisible] = useState(false);

  const InputStyle = styled.input`
    padding: 1.5rem;
    display: ${inputVisible ? "block" : "none"};
  `;
  const toggleInputVisibility = () => {
    setInputVisible(!inputVisible);
  };

  return (
    <div>
      <button onClick={toggleInputVisibility}>
        {inputVisible ? "Hide Input" : "Show Input"}
      </button>
      <InputStyle type="text" />
    </div>
  );
};

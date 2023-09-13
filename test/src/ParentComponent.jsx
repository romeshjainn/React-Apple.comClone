// ParentComponent.js
import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const greeting = "Hello, World!";
  return (
    <div>
      <ChildComponent message={greeting} />
    </div>
  );
}

export default ParentComponent;

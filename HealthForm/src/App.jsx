import React, { useState } from "react";
import { HW } from "./HW";
import { Footer } from "./Footer";

function App() {
  const [height, changeHeight] = useState(0);

  const handleHeightChange = (e) => {
    const newValue = e.target.value;
    console.log(newValue); 
    changeHeight(newValue); 
  };

  return (
    <div className="App">
      <HW height={height} handleHeightChange={handleHeightChange} />
      <Footer newValue={height} />
    </div>
  );
}

export default App;

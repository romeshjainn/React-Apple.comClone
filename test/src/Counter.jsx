import React, { useState } from "react";

export const Counter = () => {
  const [num, setNum] = useState(0);

  const incrementNum = () => {
    if (num < 100) {
      setNum(num + 1);
    }
  };

  const decrementNum = () => {
    if (num >0) {
      setNum(num - 1);
    }
  };

  return (
    <div>
      <button onClick={incrementNum}>Increment</button>
      <p>{num}</p>
      <button onClick={decrementNum}>Decrement</button>
    </div>
  );
};

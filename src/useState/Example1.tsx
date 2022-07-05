import React, { useState } from "react";

export const Example1: React.FC = () => {
  const [count, setCount] = useState(0);

  function onButtonClick() {
    setCount(count + 1);
  }

  function resetClick() {
    setCount(0);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={onButtonClick}>Click me</button>
      <button onClick={resetClick}>Reset</button>
    </div>
  );
};

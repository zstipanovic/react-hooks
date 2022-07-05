import React, { useEffect, useState } from "react";

export const Example5: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("USE EFFECT CALLED");
    document.title = `${count1} times`;
  }, [count1]);

  return (
    <div>
      <p>Count1: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Click me</button>
      <p>Count2: {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>Click me</button>
    </div>
  );
};

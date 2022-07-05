import React, { useEffect, useState } from "react";

export const Example9: React.FC = () => {
  const [count, setCount] = useState(0);

  const [multiplyBy, setMultiplyBy] = useState(0);

  const [countMultiplied, setCountMultiplied] = useState(0 * multiplyBy);

  useEffect(() => {
    setCountMultiplied(count * multiplyBy);
  }, [count, multiplyBy]);

  const reset = () => {
    setCount(0);
    setMultiplyBy(0);
  };

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>{count}</p>
      <input
        type="number"
        placeholder="Multiply by"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          const value: number = parseInt(e.currentTarget.value);
          setMultiplyBy(value);
        }}
        value={multiplyBy}
      />
      <p>Count multiplied: {countMultiplied}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

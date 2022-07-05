import React from "react";
import { useCounter } from "./useCounter";

export const Example10: React.FC = () => {
  const {
    count,
    multiplyBy,
    countMultiplied,
    increment,
    decrement,
    reset,
    setMultiplyBy,
  } = useCounter(0);

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

import React from "react";
import { useCounter } from "./useCounter";

export const Example9: React.FC = () => {
  const {
    count,
    multiplyBy,
    countMultiplied,
    increment,
    decrement,
    reset,
    setMultiplyBy,
  } = useCounter(5);

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
        <button onClick={() => increment(5)}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

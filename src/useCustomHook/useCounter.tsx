import { useEffect, useState } from "react";

export function useCounter(initialCount: number) {
  const [count, setCount] = useState(initialCount);
  const [multiplyBy, setMultiplyBy] = useState(0);

  const [countMultiplied, setCountMultiplied] = useState(
    initialCount * multiplyBy
  );

  useEffect(() => {
    setCountMultiplied(count * multiplyBy);
  }, [count, multiplyBy]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => {
    setCount(initialCount);
    setMultiplyBy(0);
  };

  return {
    count,
    countMultiplied,
    multiplyBy,
    increment,
    decrement,
    setCount,
    reset,
    setMultiplyBy,
  };
}

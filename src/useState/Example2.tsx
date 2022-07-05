/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { activeButton, sizeButton } from "styles/Example2Styles";

type PizzaSize = "S" | "M" | "L";

export const Example2: React.FC = () => {
  const [pizzaSize, setPizzaSize] = useState<PizzaSize>("S");

  const pizzaSizes: PizzaSize[] = ["S", "M", "L"];

  function onSelectSizeClick(size: PizzaSize) {
    setPizzaSize(size);
  }

  return (
    <div>
      {pizzaSizes.map((size: PizzaSize) => (
        <button
          name={size}
          onClick={() => onSelectSizeClick(size)}
          css={[sizeButton, pizzaSize === size && activeButton]}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

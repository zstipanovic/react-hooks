/** @jsxImportSource @emotion/react */
import React from "react";
import { activeButton, sizeButton } from "styles/Example2Styles";

type PizzaSize = "S" | "M" | "L";

export const Example3: React.FC = () => {
  let pizzaSize = "S";

  const pizzaSizes: PizzaSize[] = ["S", "M", "L"];

  function onSelectSizeClick(size: PizzaSize) {
    pizzaSize = size;
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

/** @jsxImportSource @emotion/react */
import { button, wrapper } from "./Header.styles";
import { ReactComponent as PizzaIcon } from "assets/icons/pizza.svg";

export const Header: React.FC = () => {
  return (
    <header css={wrapper}>
      <p>Pizz-a-tron</p>
      <PizzaIcon />
      <button css={button}>Logout</button>
    </header>
  );
};

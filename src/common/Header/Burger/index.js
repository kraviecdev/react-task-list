import { StyledBurger } from "./styled";
import { Button, Info } from "../styled";

const Burger = ({ active, onClick }) => {

  return (
    <Button onClick={onClick}>
      <StyledBurger
        active={active}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <Info>{active ? "close" : "menu"}</Info>
    </Button>
  );
};

export default Burger;
import { StyledBurger } from "./styled";
import { Button } from "../../Button";
import { Paragraph } from "../../Paragraph";

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
      <Paragraph menu>{active ? "close" : "menu"}</Paragraph>
    </Button>
  );
};

export default Burger;
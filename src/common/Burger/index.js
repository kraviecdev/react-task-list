import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen, toggleMenuState } from "../Menu/menuSlice";
import { StyledBurger } from "./styled";

const Burger = () => {
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const dispatch = useDispatch();

  return (
    <StyledBurger
      active={isMenuOpen}
      onClick={() => dispatch(toggleMenuState())}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
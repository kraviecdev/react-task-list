import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen, toggleMenuState } from "../Menu/menuSlice";
import { StyledBurger, StyledBurgerSwitch } from "./styled";

const Burger = () => {
    const isMenuOpen = useSelector(selectIsMenuOpen);
    const dispatch = useDispatch();

    return (
        <StyledBurger
            onClick={() => dispatch(toggleMenuState())}
        >
            <StyledBurgerSwitch
                active={isMenuOpen}
            />
            <StyledBurgerSwitch
                active={isMenuOpen}
            />
            <StyledBurgerSwitch
                active={isMenuOpen}
            />
        </StyledBurger>
    )
};

export default Burger;
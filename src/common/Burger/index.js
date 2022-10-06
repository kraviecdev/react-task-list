import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, selectIsMenuOpen } from "../Menu/menuSlice";
import { StyledBurger, StyledBurgerSwitch } from "./styled";

const Burger = () => {
    const isMenuOpen = useSelector(selectIsMenuOpen);

    console.log(isMenuOpen);
    const dispatch = useDispatch();

    return (
        <StyledBurger
            onClick={() => dispatch(toggleMenu())}
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
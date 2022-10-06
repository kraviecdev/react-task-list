import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, selectIsOpen } from "../Menu/menuSlice";
import { StyledBurger, StyledBurgerSwitch } from "./styled";

const Burger = () => {
    const isOpen = useSelector(selectIsOpen);
    const dispatch = useDispatch();

    return (
        <StyledBurger
            onClick={() => dispatch(toggleMenu())}
        >
            <StyledBurgerSwitch
                active={isOpen}
            />
            <StyledBurgerSwitch
                active={isOpen}
            />
            <StyledBurgerSwitch
                active={isOpen}
            />
        </StyledBurger>
    )
};

export default Burger;
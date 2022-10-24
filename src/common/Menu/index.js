import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen, toggleMenuState } from "./menuSlice";

import ThemeSwitch from "../ThemeSwitch";
import Burger from "../Burger";
import { StyledMenu, StyledNavBox, StyledNavItemBox } from "./styled";

const Menu = ({ home, tools, about }) => {
    const isMenuOpen = useSelector(selectIsMenuOpen);

    const dispatch = useDispatch();

    return (
        <>
            <Burger />
            <StyledMenu
                active={isMenuOpen}
            >
                <StyledNavBox>
                    {isMenuOpen&&(<StyledNavBox onClick={() => dispatch(toggleMenuState())}>{home}</StyledNavBox>)}
                    <StyledNavItemBox onClick={() => dispatch(toggleMenuState())}>{about}</StyledNavItemBox>
                    <StyledNavItemBox onClick={() => dispatch(toggleMenuState())}>{tools}</StyledNavItemBox>
                </StyledNavBox>
                <StyledNavItemBox themeSwitch>
                    <ThemeSwitch />
                </StyledNavItemBox>
            </StyledMenu>
        </>
    )
};

export default Menu;
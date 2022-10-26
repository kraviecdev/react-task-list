import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen, toggleMenuState } from "./menuSlice";

import ThemeSwitch from "../ThemeSwitch";
import Burger from "../Burger";
import { StyledMenu, StyledNavBox, StyledNavItemBox } from "./styled";

const Menu = ({ title, home, tools, about }) => {
    const isMenuOpen = useSelector(selectIsMenuOpen);

    const dispatch = useDispatch();

    return (
        <>
            <Burger />
            <StyledMenu
                active={isMenuOpen}
            >
                <StyledNavBox>
                    <StyledNavItemBox onClick={() => dispatch(toggleMenuState())}>{title}</StyledNavItemBox>
                    <StyledNavItemBox onClick={() => dispatch(toggleMenuState())}>{home}</StyledNavItemBox>
                    <StyledNavItemBox onClick={() => dispatch(toggleMenuState())}>{about}</StyledNavItemBox>
                    <StyledNavItemBox onClick={() => dispatch(toggleMenuState())}>{tools}</StyledNavItemBox>
                    <StyledNavItemBox onClick={() => dispatch(toggleMenuState())} ><ThemeSwitch /></StyledNavItemBox>
                </StyledNavBox>
            </StyledMenu>
        </>
    )
};

export default Menu;
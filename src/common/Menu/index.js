import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen, toggleMenuState } from "./menuSlice";

import ThemeSwitch from "../ThemeSwitch";
import Burger from "../Burger";
import { StyledMenu, StyledNavBox, StyledNavItemBox } from "./styled";

const Menu = ({ home, tools, about }) => {
    const isMenuOpen = useSelector(selectIsMenuOpen);
    const isMobile = window.innerWidth <= 768 ? true : false;
    
    const dispatch = useDispatch();

    return (
        <>
            <Burger />
            <StyledMenu
                active={isMenuOpen}
            >
                <StyledNavBox>
                    {isMobile&&(<StyledNavBox onClick={() => dispatch(toggleMenuState())}>{home}</StyledNavBox>)}
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
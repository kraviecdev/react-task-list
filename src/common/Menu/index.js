import { useSelector } from "react-redux";
import { selectIsMenuOpen } from "./menuSlice";

import ThemeSwitch from "../ThemeSwitch";
import Burger from "../Burger";
import { StyledMenu, StyledNavBox, StyledNavItemBox } from "./styled";

const Menu = ({ home, tools, about }) => {
    const isMenuOpen = useSelector(selectIsMenuOpen);

    return (
        <>
            <Burger />
            <StyledMenu
                active={isMenuOpen}
            >
                <StyledNavBox>
                    {isMenuOpen&&(<StyledNavBox>{home}</StyledNavBox>)}
                    <StyledNavItemBox>{about}</StyledNavItemBox>
                    <StyledNavItemBox>{tools}</StyledNavItemBox>
                </StyledNavBox>
                <StyledNavItemBox themeSwitch>
                    <ThemeSwitch />
                </StyledNavItemBox>
            </StyledMenu>
        </>
    )
};

export default Menu;
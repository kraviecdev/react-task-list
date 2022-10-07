import { useSelector } from "react-redux";
import { selectIsMenuOpen } from "./menuSlice";

import ThemeSwitch from "../ThemeSwitch";
import { StyledMenu, StyledMenuLink, StyledNavBox, StyledNavItemBox } from "./styled";

const Menu = () => {
    const isMenuOpen = useSelector(selectIsMenuOpen);

    return (
        <StyledMenu
            active={isMenuOpen}
        >
            <StyledNavBox>
                <StyledMenuLink>
                    <StyledNavItemBox>Home</StyledNavItemBox>
                </StyledMenuLink>
                <StyledMenuLink>
                    <StyledNavItemBox>Tools</StyledNavItemBox>
                </StyledMenuLink>
                <StyledMenuLink>
                    <StyledNavItemBox>About</StyledNavItemBox>
                </StyledMenuLink>
            </StyledNavBox>
            <StyledNavItemBox themeSwitch>
                <ThemeSwitch />
            </StyledNavItemBox>
        </StyledMenu>
    )
};

export default Menu;
import { useSelector } from "react-redux";
import { selectIsMenuOpen } from "./menuSlice";

import ThemeSwitch from "../ThemeSwitch";
import { StyledMenu, StyledMenuLink, StyledNavBox, StyledNavItemBox } from "./styled";

const Menu = () => {
    const isOpen = useSelector(selectIsMenuOpen);

    return (
        <StyledMenu
            active={isOpen}
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
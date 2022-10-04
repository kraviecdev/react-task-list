import ThemeSwitch from "../ThemeSwitch";
import { StyledMenu, StyledMenuLink, StyledNavBox, StyledNavItemBox } from "./styled";

const Menu = () => {
    return (
        <StyledMenu>
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
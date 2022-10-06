import { useSelector } from "react-redux";
import ThemeSwitch from "../ThemeSwitch";
import { selectIsOpen } from "./menuSlice";
import { StyledMenu, StyledMenuLink, StyledNavBox, StyledNavItemBox } from "./styled";

const Menu = () => {
    const isOpen = useSelector(selectIsOpen);

    console.log(isOpen);

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
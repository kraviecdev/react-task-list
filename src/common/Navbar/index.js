import { StyledLink, StyledNav, StyledNavBox } from "./styled";

const Navbar = () => {
    return (
        <StyledNav>
            <StyledNavBox>
                <StyledLink>Home</StyledLink>
            </StyledNavBox>
            <StyledNavBox>
                <StyledLink>Tools</StyledLink>
            </StyledNavBox>
            <StyledNavBox>
                <StyledLink>About</StyledLink>
            </StyledNavBox>
        </StyledNav>
    )
};

export default Navbar;
import { StyledHeader, StyledTitle } from "./styled";
import { ThemeSwitch } from "../ThemeSwitch";

const Header = ({ title }) => (
    <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <ThemeSwitch />
    </StyledHeader>
);

export default Header;
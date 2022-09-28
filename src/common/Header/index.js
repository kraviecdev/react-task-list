import { StyledHeader, StyledTitle } from "./styled";
import ThemeSwitch from "../ThemeSwitch";

const Header = ({ title, children }) => (
    <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        {children}
        <ThemeSwitch />
    </StyledHeader>
);

export default Header;
import { StyledHeader, StyledTitle } from "./styled";

const Header = ({ title, children }) => (
    <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        {children}
    </StyledHeader>
);

export default Header;
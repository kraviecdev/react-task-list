import { StyledHeader, StyledTitle } from "./styled";

const Header = ({ title, navigation }) => (
    <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        {navigation}
    </StyledHeader>
);

export default Header;
import Menu from "../Menu";
import Burger from "../Burger";
import { StyledHeader, StyledTitle } from "./styled";

const Header = ({ title }) => (
    <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <Burger />
        <Menu />
    </StyledHeader>
);

export default Header;
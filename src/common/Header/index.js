import { useSelector } from "react-redux";
import { selectIsMenuOpen } from "../Menu/menuSlice";
import { StyledHeader, StyledTitle } from "./styled";

const Header = ({ title, navigation }) => {
    const isMenuOpen = useSelector(selectIsMenuOpen); 

    return (
        <StyledHeader>
            <StyledTitle active={!isMenuOpen} >{title}</StyledTitle>
            {navigation}
        </StyledHeader>
    )
};

export default Header;
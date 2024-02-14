import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation, StyledHeader } from "./styled";
import { MainHeading } from "../Heading";
import { StyledNavLink } from "../Link";
import ThemeSwitch from "./ThemeSwitch";
import Burger from "./Burger";


const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <StyledHeader>
      <MainHeading>
        <Link to="/tasks">
          Tasks list
        </Link>
      </MainHeading>
      <Burger active={active} onClick={() => setActive(!active)} />
      <Navigation active={active}>
        <StyledNavLink onClick={() => setActive(!active)} to="/tasks">Tasks</StyledNavLink>
        <StyledNavLink onClick={() => setActive(!active)} to="/about">About</StyledNavLink>
        <ThemeSwitch />
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
import { Navigation, StyledHeader } from "./styled";
import { MainHeading } from "../Heading";
import ThemeSwitch from "./ThemeSwitch";
import { StyledNavLik } from "../Link";
import Burger from "./Burger";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <StyledHeader>
      <MainHeading>
        Tasks list
      </MainHeading>
      <Burger active={active} onClick={() => setActive(!active)} />
      <Navigation active={active}>
        <StyledNavLik onClick={() => setActive(!active)} to="/tasks">Tasks</StyledNavLik>
        <StyledNavLik onClick={() => setActive(!active)} to="/about">About</StyledNavLik>
        <ThemeSwitch />
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
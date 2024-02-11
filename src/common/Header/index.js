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
        <StyledNavLik to="/tasks">Tasks</StyledNavLik>
        <StyledNavLik to="/author">Author</StyledNavLik>
        <StyledNavLik to="/app_info">Application Info</StyledNavLik>
        <ThemeSwitch />
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
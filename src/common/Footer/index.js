import { GithubIcon, LinkedInIcon, StyledFooter } from "./styled";
import { Wrapper } from "../Wrapper";
import { AdditionalHeading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { Link } from "../Link";


const Footer = () => (
  <StyledFooter>
    <Wrapper column>
      <Paragraph footer>
        This project was created during the YouCode course. It covers all the techniques learned in this course. This
        project is made for practice only, not for profit.
      </Paragraph>
      <AdditionalHeading>Contact me if my work seems interesting to you!</AdditionalHeading>
      <Link href="mailto:pkrawczyk@kraviecdev.com">
        pkrawczyk@kraviecdev.com
      </Link>
      <Wrapper inner>
        <Link href="https://github.com/kraviecdev">
          <GithubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/patryk-krawczyk-js">
          <LinkedInIcon />
        </Link>
      </Wrapper>
      <Paragraph>Coded by Patryk Krawczyk &copy; 2022</Paragraph>
    </Wrapper>
  </StyledFooter>
);

export default Footer;
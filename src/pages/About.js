import { Main } from "../common/Main";
import { Subheading } from "../common/Heading";
import { Paragraph } from "../common/Paragraph";
import { Wrapper } from "../common/Wrapper";
import { Section } from "../common/Section";

const About = () => {
  return (
    <Main>
      <Section>
        <Subheading>About</Subheading>
        <Paragraph>
          This Application was made as a part of YouCode course. It represents my knowledge about, <span>React, Redux,
          Redux-Saga and React-Router</span> &#9994; Refreshed with current <span>npm packages</span> &#128187;
        </Paragraph>
      </Section>
      <Section transparent>
        <Subheading>Hello there!</Subheading>
        <Wrapper inner>
          <img src={`${process.env.PUBLIC_URL}/img/PK.png`} alt="Patryk Krawczyk photo" />
          <Paragraph author>
            I am <span>CyberSecurity Analyst</span>
            <br />I am <span>MERN</span> Stack developer
            <br />I am <span>Patryk Krawczyk</span>
          </Paragraph>
        </Wrapper>
      </Section>
    </Main>
  );
};

export default About;
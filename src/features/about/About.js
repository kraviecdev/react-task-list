import Container from "../../common/Container";
import Paragraph from "../../common/Paragraph";
import Section from "../../common/Section";
import { StyledParagraphLink } from "../../common/Paragraph/styled";
import Author from "./Author";

const About = () => {
    return (
        <Container>
            <Section
                title={"About"}
                body={
                    <Paragraph description={
                        <span>I am a Front-End Developer out of love and passion. I am trying to spent every spare time to have more practise in it. &#9994;
                            <br />Currently I am working at my <strong>Personal homepage, Tasks List Application & Layout for Brand Page.</strong>
                            <br />Mean time I am still learning <strong>Redux, React Router and some Figma</strong> Sometimes I catch myself at checking the source code of applications or pages just to see how others made it. &#128064;
                            <br />When I start to code, time doesn't metter &#9201; Sometimes I am spending the whole night just to make sure that submit button have look and properties I want &#128076;
                            <br />Personally I am very polite and open person. I love to watch films & TV series. My last favourite is <q><em>The good doctor</em></q> &#128138;
                            <br />Now you know something about me, if you want to know more about the application got to <StyledParagraphLink href="/react-task-list#/app_info">Application Info</StyledParagraphLink> section. Contact info in in the Footer at the bottom of the page. That one below is me &#128071;
                        </span>} />
                }
            />
            <Author />
        </Container>
    );
};

export default About;
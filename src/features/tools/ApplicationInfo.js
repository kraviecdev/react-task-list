import Container from "../../common/Container";
import Section from "../../common/Section";
import Paragraph from "../../common/Paragraph";
import AppInfo from "./AppInfo";
import { StyledParagraphLink } from "../../common/Paragraph/styled";


const ApplicationInfo = () => {
    return (
        <Container>
            <Section
                title={"Application Info"}
                body={
                    <Paragraph
                        description={
                            <span>
                                This Application was made during the <em>YouCode</em> course as one of the project. &#128187;
                                <br />First project was simple and includes HTML, CSS and Vanilla JS. You can spot it <StyledParagraphLink href="https://patrick36212.github.io/to-do-list/" target="_blank">&#128073; here</StyledParagraphLink>
                                <br />This is more extended version. It contains more advanced techniques learned by months of study and practise. &#128640;
                                <br />Open Source libraries used to make Tasks List application:
                            </span>
                        } />
                }
            />
            <AppInfo />
        </Container>
    );
};

export default ApplicationInfo;
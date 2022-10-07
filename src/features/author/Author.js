import Container from "../../common/Container";
import Section from "../../common/Section";
import About from "./About";

const Author = () => {
    return (
        <Container>
            <Section
                title="Author"
                body={<About />}
            />
        </Container>
    );
};

export default Author;
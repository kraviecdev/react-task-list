import { StyledSection } from "../../../common/Section/styled";
import personalImage from "./PK.png";
import { StyledAuthorContainer, StyledAuthorInfo, StyledImg } from "./styled";

const Author = () => {
    return (
        <StyledSection additionalSection>
            <StyledAuthorContainer>
                <StyledImg src={personalImage} alt="Patryk Krawczyk - the author" />
                <StyledAuthorInfo>
                    Patryk Krawczyk - Front-End Developer but also SOC Analyst.
                    <br />CyberSecurity is my second passion.
                    <br />Open to learn new technologies but also secur techniques.
                </StyledAuthorInfo>
            </StyledAuthorContainer>
        </StyledSection>
    );
}

export default Author;
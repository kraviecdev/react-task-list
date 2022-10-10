import { StyledParagraphLink } from "../../../common/Paragraph/styled";
import { StyledSection } from "../../../common/Section/styled";
import { StyledLibrariesList, StyledLibrariesName } from "./styled";


const AppInfo = () => {
    return (
        <StyledSection additionalSection>
            <StyledLibrariesList>
                <StyledParagraphLink>
                    <StyledLibrariesName>
                        Styled Components
                    </StyledLibrariesName>
                </StyledParagraphLink>
                <StyledParagraphLink>
                    <StyledLibrariesName>
                        React
                    </StyledLibrariesName>
                </StyledParagraphLink>
                <StyledParagraphLink>
                    <StyledLibrariesName>
                        React-Redux
                    </StyledLibrariesName>
                </StyledParagraphLink>
                <StyledParagraphLink>
                    <StyledLibrariesName>
                        React-Router
                    </StyledLibrariesName>
                </StyledParagraphLink>
                <StyledParagraphLink>
                    <StyledLibrariesName>
                        Redux-Saga
                    </StyledLibrariesName>
                </StyledParagraphLink>
                <StyledParagraphLink>
                    <StyledLibrariesName>
                        GitHub pages
                    </StyledLibrariesName>
                </StyledParagraphLink>
            </StyledLibrariesList>
        </StyledSection>
    )
};

export default AppInfo;
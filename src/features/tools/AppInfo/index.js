import { StyledSection } from "../../../common/Section/styled";
import { StyledLibrariesContainer, StyledLibrariesFrame, StyledLibrariesName, StyledLibraryContainer } from "./styled";


const AppInfo = () => {
    return (
        <StyledSection additionalSection>
            <StyledLibrariesContainer>
                <StyledLibraryContainer>
                    <StyledLibrariesName>
                        React
                    </StyledLibrariesName>
                    <StyledLibrariesFrame
                        src="https://reactjs.org/"
                    />
                </StyledLibraryContainer>

                <StyledLibraryContainer>
                    <StyledLibrariesName>
                        React-Redux
                    </StyledLibrariesName>
                    <StyledLibrariesFrame
                        src="https://reactjs.org/"
                    />
                </StyledLibraryContainer>

                <StyledLibraryContainer>
                    <StyledLibrariesName>
                        React-Router
                    </StyledLibrariesName>
                    <StyledLibrariesFrame
                        src="https://reactjs.org/"
                    />
                </StyledLibraryContainer>

                <StyledLibraryContainer>
                    <StyledLibrariesName>
                        Styled Components
                    </StyledLibrariesName>
                    <StyledLibrariesFrame
                        src="https://reactjs.org/"
                    />
                </StyledLibraryContainer>

                <StyledLibraryContainer>
                    <StyledLibrariesName>
                        Github pages
                    </StyledLibrariesName>
                    <StyledLibrariesFrame
                        src="https://reactjs.org/"
                    />
                </StyledLibraryContainer>
            </StyledLibrariesContainer>
        </StyledSection>
    )
};

export default AppInfo;
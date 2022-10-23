import { StyledLibraryName, StyledLibraryContainer, StyledLibrary, StyledFrontLibrary, StyledBackLibrabry } from "./styled";

const Library = ({ name, paragraph, icon }) => (
    <StyledLibraryContainer>
        <StyledLibrary>
            <StyledFrontLibrary>{icon}</StyledFrontLibrary>
            <StyledBackLibrabry>
                <StyledLibraryName>{name}</StyledLibraryName>
                {paragraph}
            </StyledBackLibrabry>
        </StyledLibrary>
    </StyledLibraryContainer>
);

export default Library;
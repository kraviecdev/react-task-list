import { StyledLibraryInfo, StyledLibraryName, StyledLibraryContainer } from "./styled";

const Library = ({ name, description, icon }) => (
    <StyledLibraryContainer>
        <StyledLibraryName>{name}</StyledLibraryName>
        <StyledLibraryInfo>
            {icon}
            {description}
        </StyledLibraryInfo>
    </StyledLibraryContainer>
);

export default Library;
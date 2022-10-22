import { StyledLibraryInfo, StyledLibraryName, StyledLibraryContainer } from "./styled";

const Library = ({ name, description, icon }) => (
    <StyledLibraryContainer>
        <StyledLibraryInfo>
            <StyledLibraryName>{name}</StyledLibraryName>
            {icon}
            {description}
        </StyledLibraryInfo>
    </StyledLibraryContainer>
);

export default Library;
import styled from "styled-components";

export const StyledLibrariesList = styled.div`
    margin: 16px 0;
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
`;

export const StyledLibrariesName = styled.span`
    width: 100%;
    text-align: center;
    border: 3px solid ${({theme}) => theme.colors.backgroundAddPrimary};
`;

export const StyledLibrariesFrame = styled.iframe`

`;
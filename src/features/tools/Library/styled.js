import styled from "styled-components";


export const StyledLibraryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    min-height: 150px;
    padding: 5px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.backgroundAddPrimary};
    color: ${({ theme }) => theme.colors.colorPrimary};
    border: 3px solid ${({ theme }) => theme.colors.buttonPrimary};
    border-radius: 25px;
    transition: .7s;

    &:hover {
        transform: scale(1.08);
        filter: brightness(110%);
    }
`;

export const StyledLibraryName = styled.span`
    font-size: 24px;
    font-weight: bold;
 `;

export const StyledLibraryInfo = styled.div`
    
`;

export const LibraryIcon = styled.i`

`;
import styled from "styled-components";

export const StyledLibrariesContainer = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;

export const StyledLibraryContainer = styled.div`
    max-width: 200px;
    width: 100%;
`;

export const StyledLibrariesName = styled.button`
    width: 100%;
    height: 70px;
    padding: 5px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.buttonPrimary};
    color: ${({ theme }) => theme.colors.backgroundPrimary};
    border: none;
    transition: .7s;

    &:hover {
        transform: scale(1.08);
        filter: brightness(110%);
    }

    &:active {
         color: ${({ theme }) => theme.colors.colorPrimary};
    }
 `;

export const StyledLibrariesFrame = styled.iframe`
    display: none;
`;
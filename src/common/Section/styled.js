import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    margin: 20px auto;

    ${({ additionalSection }) => additionalSection && css`
        background-color: transparent;
    `}
`;

export const StyledSectionHeader = styled.header`
    border-bottom: 2px solid ${({ theme }) => theme.colors.backgroundAddPrimary};
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const StyledSubheader = styled.h2`
    margin: 5px 0;
    padding: 15px;
    flex-grow: 1;
`;
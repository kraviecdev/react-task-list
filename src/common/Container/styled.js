import styled from "styled-components";

export const StyledContainer = styled.main`
    min-height: calc(100vh - 375px);
    margin: 0 auto;
    padding: 20px 0;
    max-width: ${({ theme }) => theme.breakpoints.extraLarge}px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        max-width: 100%;
    }
`;
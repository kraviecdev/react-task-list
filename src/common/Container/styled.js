import styled from "styled-components";

export const StyledContainer = styled.main`
    margin: 0 auto;
    padding: 20px;
    max-width: ${({ theme }) => theme.breakpoint.maxWidth}px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 100%;
    }
`;
import styled from "styled-components";

export const Main = styled.main`
    flex-grow: 1;
    margin: 0 auto;
    padding: 20px 0;
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.extraLarge}px;

    @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
        padding: 20px 10px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        max-width: 100%;
    }
`;
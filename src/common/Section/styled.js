import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    margin: 20px auto;
`;

export const StyledSectionHeader = styled.header`
    border-bottom: 2px solid ${({ theme }) => theme.color.platinum};
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const StyledSubheader = styled.h2`
    margin: 5px 0;
    padding: 15px;
    flex-grow: 1;
`;
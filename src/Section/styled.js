import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: hsl(0, 0%, 100%);
    margin: 20px auto;
`;

export const StyledSectionHeader = styled.header`
    border-bottom: 2px solid hsl(0, 0%, 90%);
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const StyledSubheader = styled.h2`
    margin: 5px 0;
    padding: 15px;
    flex-grow: 1;
`;
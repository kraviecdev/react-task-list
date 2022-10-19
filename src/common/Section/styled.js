import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    margin: 20px auto;

    ${({ additionalSection }) => additionalSection && css`
        background-color: transparent;
    `};

    
    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translate3d(-100%, 0, 0);
        }
        to {
            opacity: 1;
            transform: none;
        }
    };

    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translate3d(100%, 0, 0);
        }
        to {
            opacity: 1;
            transform: none;
        }
    };

    :nth-child(odd) {
        animation: fadeInLeft .7s;
    }

    :nth-child(even) {
        animation: fadeInRight .7s;
    }
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
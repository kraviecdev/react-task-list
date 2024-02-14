import styled, { keyframes } from "styled-components";

const shadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const MainHeading = styled.h1`
    font-size: 48px;
    color: ${({ theme }) => theme.colors.colorPrimary};
    margin: 0 5px;

    a {
        color: inherit;
        text-decoration: none;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 32px;
    }
`;

export const Subheading = styled.h2`
    font-size: 32px;
    margin: 5px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 26px;
    }
`;

export const AdditionalHeading = styled.h4`
    font-size: 20px;
    text-transform: uppercase;
    opacity: 0;
    animation: ${shadeIn} 4s infinite;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 16px;
    }
`;
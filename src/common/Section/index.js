import styled, { css, keyframes } from "styled-components";

const fadeInLeft = keyframes`
    from {
        transform: translate3d(-100%, 0, 0);
    }
    to {
        transform: none;
    }
`;

const fadeInRight = keyframes`
    from {
        transform: translate3d(100%, 0, 0);
    }
    to {
        transform: none;
    }
`;

export const Section = styled.section`
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    margin: 20px auto;
    padding: 26px;

    &:nth-child(odd) {
        animation: ${fadeInLeft} .7s;
    }

    &:nth-child(even) {
        animation: ${fadeInRight} .7s;
    }

    ${({ transparent }) => transparent && css`
        background: transparent;
    `}
`;
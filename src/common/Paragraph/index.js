import styled, { css } from "styled-components";

export const Paragraph = styled.p`
    margin: 0;
    text-align: justify;
    font-size: 20px;
    white-space: break-spaces;
    line-height: 32px;

    span {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.buttonPrimary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 14px;
        line-height: 26px;
    }

    ${({ menu }) => menu && css`
        font-weight: bold;
        text-transform: uppercase;
    `}

    ${({ author }) => author && css`
        align-self: flex-end;
    `}

    ${({ footer }) => footer && css`
        width: 60%;

        @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
            width: 100%;
        }
    `}
`;
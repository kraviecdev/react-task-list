import styled, { css } from "styled-components";

export const Section = styled.section`
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    margin: 20px auto;

    ${({ transparent }) => transparent && css`
        background: transparent;
    `}

    ${({ about }) => about && css`
        padding: 16px;
    `}
`;
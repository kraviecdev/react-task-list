import styled from "styled-components";

export const StyledParagraph = styled.p`
    margin: 0;
    padding: 10px 15px;
    text-align: justify;
    font-size: 20px;
    white-space: break-spaces;
    line-height: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 14px;
        line-height: 26px;
    }
`;

export const StyledParagraphLink = styled.a`
    text-decoration: none;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.buttonPrimary};
    transition: .7s;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.colorPrimary};
    };
`;
import styled from "styled-components";

export const Link = styled.a`
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.buttonPrimary};
    transition: color 1s;

    &:hover{
        color: ${({ theme }) => theme.colors.colorPrimary};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 20px;
    }
`;
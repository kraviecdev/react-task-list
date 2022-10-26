import styled from "styled-components";
import { css } from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background-color: inherit;
    margin: 0 auto;
    min-height: 61px;
    width: 100%;
    max-width: 1420px;
`;

export const StyledTitle = styled.h1`
    display: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px){
        ${({ active }) => active && css`
        margin: 0;
        display: block;
    `}
    }
    
`;
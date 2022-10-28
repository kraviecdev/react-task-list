import styled from "styled-components"

export const StyledImg = styled.img`
    max-height: 300px;
    border-radius: 50% 0;
    filter: drop-shadow(10px 2px 6px gray);

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        max-height: 150px;
        border-radius: 50%;
    }
`;

export const StyledAuthorInfo = styled.span`
    padding: 5px 10px;
    font-size: 20px;
    white-space: break-spaces;
    line-height: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 14px;
        line-height: 26px;
    }
`;

export const StyledAuthorContainer = styled.div`
        display: grid;
        grid-template-columns: 280px 1fr;
        align-items: end;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        grid-template-columns: 1fr;
        align-items: center;
        justify-items: center;
    }
`;
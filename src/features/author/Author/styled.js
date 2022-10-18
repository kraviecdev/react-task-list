import styled from "styled-components"

export const StyledImg = styled.img`
    max-height: 300px;
    border-radius: 50% 0;
    filter: drop-shadow(10px 2px 6px gray);
`;

export const StyledAuthorInfo = styled.span`
    padding: 5px 10px;
    font-size: 20px;
    white-space: break-spaces;
    line-height: 32px;
`;

export const StyledAuthorContainer = styled.div`
        display: grid;
        grid-template-columns: 280px 1fr;
        align-items: end;
`;
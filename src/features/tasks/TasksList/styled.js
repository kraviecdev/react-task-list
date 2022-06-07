import styled, { css } from "styled-components";

export const StyledList = styled.ul`
    padding: 10px;
    list-style-type: none;
`;

export const StyledTask = styled.li`
    align-items: center;
    display: flex;
    padding: 5px;
    margin-top: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.grey};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const StyledContent = styled.p`
    padding: 0 10px;
    display: flex;
    flex-grow: 1;
    word-break: break-word;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;
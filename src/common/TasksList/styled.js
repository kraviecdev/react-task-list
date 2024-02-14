import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 10px;
    list-style-type: none;
`;

export const ListItem = styled.li`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 5px;
    margin-top: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.colorSecondary};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;
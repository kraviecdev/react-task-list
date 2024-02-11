import styled, { css } from "styled-components";


export const SwitchBody = styled.span`
    width: 47px;
    padding: 2px;
    border-radius: 15px;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    border: 1px solid;
    transition: background .3s;
`;

export const IconBody = styled.span`
    background: ${({ theme }) => theme.colors.buttonPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    transition: transform .3s, background .3s;

    ${({ active }) => active && css`
        transform: translateX(20px);
    `}
`;
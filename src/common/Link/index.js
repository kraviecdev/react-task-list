import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled.a`
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.buttonPrimary};
    transition: color 1s;

    &:hover {
        color: ${({ theme }) => theme.colors.colorPrimary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 20px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    cursor: pointer;
    font-size: ${({ content }) => content ? 20 : 32}px;
    font-weight: bold;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.buttonPrimary};
    transition: .7s;

    &.active {
        text-decoration: underline;
        filter: brightness(1.25);
    }
;

    &:hover {
        filter: brightness(1.25);
    }
;

    ${({ header }) => header && css`
        font-size: 32px;
        color: ${({ theme }) => theme.colors.colorPrimary};
        text-decoration: none;

        &:hover {
            color: ${({ theme }) => theme.colors.buttonPrimary};
        }

        &.active {
            color: ${({ theme }) => theme.colors.colorPrimary};
            text-decoration: none;
        }
    ;
    `};

    ${({ taskLink }) => taskLink && css`
        font-size: 18px;
    `};
`;
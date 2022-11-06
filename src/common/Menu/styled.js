import { css } from "styled-components";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledMenu = styled.nav`
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    transition: transform 0.3s ease-in-out;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px){
        transform: translateY(-100%);
        width: 100%;
        position: absolute;
        right: 0;
        top: 0;
        flex-direction: column;
        align-items: center;
        z-index: 1;
        background: ${({ theme }) => theme.colors.backgroundPrimary};

        ${({ active }) => active && css`
        transform: translateY(0);
        `}
    }
`;

export const StyledNavBox = styled.div`
    display: inherit;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px){
        flex-direction: column; 
        width: 100%;
    }
`;

export const StyledNavItemBox = styled.span`
    padding: 0 7px;
    transition: 1.2s;

    &:hover {
        color: ${({ theme }) => theme.colors.colorPrimary};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px){
        display: flex;
        flex-grow: 1;
        justify-content: center;
        padding: 12px 0;
    }
`;

export const StyledNavLink = styled(NavLink)`
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.buttonPrimary};
    transition: .7s;

    &.active {
        text-decoration: underline;
        filter: brightness(1.25);
    };

    &:hover{
        filter: brightness(1.25);
    };

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
        };
    `};

    ${({ taskLink }) => taskLink && css`
        font-size: 18px;
    `};
`;
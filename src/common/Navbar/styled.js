import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    align-items: center;
`;

export const StyledNavBox = styled.span`
    padding: 0 7px;
    border-bottom: 2px solid transparent;
    border-top: 2px solid transparent;
    transition: .7s;

    @keyframes border-slide {
        from {
            border: 0%;
        }
        to {
            border: 50%;
        }
    }

    &:hover {
        animation: .7s border-slide ease-in-out;
        border-bottom: 3px solid ${({theme}) => theme.colors.colorPrimary};
        border-top: 3px solid ${({theme}) => theme.colors.colorPrimary};
    }
`;

export const StyledLink = styled.a`
    font-size: 24px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.buttonPrimary};
    transition: .7s;

    &:hover {
        color: ${({theme}) => theme.colors.colorPrimary};
        cursor: pointer;
    };
`;
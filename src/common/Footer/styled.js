import styled from "styled-components";
import { ReactComponent as Github } from "./github.svg";
import { ReactComponent as LinkedIn } from "./linkedin.svg";

export const StyledFooter = styled.footer`
    width: 100%;
    color: ${({ theme }) => theme.colors.colorPrimary};
    background: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const StyledFooterWrapper = styled.div`
    max-width: 1420px;
    margin: 30px auto 0;
    padding: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px){
        max-width: 100%;
        padding: 12px;
    }
`;

export const StyledFooterHeader = styled.h4`
    font-size: 16px;
    margin: 10 0px;
    font-weight: normal;
    text-transform: uppercase;
    opacity: 0;
    animation: 
        shadeIn 4s infinite;

    @keyframes  shadeIn {
        from {
            opacity: 0;
            }
        to {
            opacity: 1;
            }
        }
    
    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px){
        font-size: 13px;
    }
`;


export const StyledLink = styled.a`
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.buttonPrimary};
    transition: color 1s;

    &:hover{
        color: ${({ theme }) => theme.colors.colorPrimary};
    }
`;

export const StyledAbout = styled.p`
    max-width: 60%;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px){
        max-width: 100%;
    }
`;

export const StyledSocialList = styled.ul`
    display: flex;
    align-items: flex-start;
    list-style: none;
    padding: 0;
`;

export const StyledSocial = styled.li`
    margin-right: 16px;
`;

export const GithubIcon = styled(Github)`
    fill: ${({ theme }) => theme.colors.buttonPrimary};
    transition: 1s;

    &:hover{
        fill: ${({ theme }) => theme.colors.colorPrimary};
    }
`;

export const LinkedInIcon = styled(LinkedIn)`
    fill: ${({ theme }) => theme.colors.buttonPrimary};
    transition: 1s;

    &:hover{
        fill: ${({ theme }) => theme.colors.colorPrimary};
    }
`;
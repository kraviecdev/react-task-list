import styled from "styled-components";
import { Github } from "@styled-icons/bootstrap/Github";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";

export const StyledFooter = styled.footer`
    width: 100%;
    color: ${({ theme }) => theme.colors.colorPrimary};
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    padding: 12px;
`;

export const GithubIcon = styled(Github)`
    width: 32px;
    fill: ${({ theme }) => theme.colors.buttonPrimary};
    transition: 1s;

    &:hover {
        fill: ${({ theme }) => theme.colors.colorPrimary};
    }
`;

export const LinkedInIcon = styled(Linkedin)`
    width: 32px;
    fill: ${({ theme }) => theme.colors.buttonPrimary};
    transition: 1s;

    &:hover {
        fill: ${({ theme }) => theme.colors.colorPrimary};
    }
`;
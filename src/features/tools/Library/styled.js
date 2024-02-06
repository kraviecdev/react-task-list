import styled from "styled-components";
import { ReactLogo } from "@styled-icons/simple-icons/ReactLogo";
import { Redux } from "@styled-icons/simple-icons/Redux";
import { Reactrouter } from "@styled-icons/simple-icons/Reactrouter";
import { Githubpages } from "@styled-icons/simple-icons/Githubpages";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";

export const StyledLibraryContainer = styled.div`
    position: relative;
    min-width: 240px;
    min-height: 240px;
    perspective: 600px;
    cursor: pointer;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px){
        margin: 0 auto 5px;
        min-height: 75px;
        transition: .7s ease-in-out;

        &:hover{
            min-height: 200px;
        }
    }
`;

export const StyledLibrary = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transition: all .7s ease-in-out;
    background-color: ${({ theme }) => theme.colors.backgroundAddPrimary};
    color: ${({ theme }) => theme.colors.colorPrimary};
    border: 3px solid ${({ theme }) => theme.colors.buttonPrimary};
    border-radius: 25px;

    &:hover {
        transform: rotateY(-180deg);
    }
`;

export const StyledFrontLibrary = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
`;

export const StyledBackLibrabry = styled.div`
    padding: 10px;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`;

export const StyledLibraryName = styled.span`
    font-size: 24px;
    font-weight: bold;
    margin: 5px 0;
 `;

export const StyledLibraryInfo = styled.span`
    font-size: 16px;
    margin: 5px 0;
    line-height: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 14px;
        line-height: 20px;
    }
`;

export const ReactIcon = styled(ReactLogo)`
    width: 60px;
    color: ${({ theme }) => theme.colors.buttonPrimary};
`;

export const ReduxIcon = styled(Redux)`
    width: 60px;
    color: ${({ theme }) => theme.colors.buttonPrimary};
`;

export const RouterIcon = styled(Reactrouter)`
    width: 60px;
    color: ${({ theme }) => theme.colors.buttonPrimary};
`;

export const PagesIcon = styled(Githubpages)`
    width: 60px;
    color: ${({ theme }) => theme.colors.buttonPrimary};
`;

export const StyledComponentsIcon = styled(Styledcomponents)`
    width: 60px;
    color: ${({ theme }) => theme.colors.buttonPrimary};
`;
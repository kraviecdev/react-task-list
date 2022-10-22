import styled from "styled-components";
import {ReactLogo} from "@styled-icons/fa-brands/ReactLogo";
import {Redux} from "@styled-icons/simple-icons/Redux";
import {Reactrouter} from "@styled-icons/simple-icons/Reactrouter";
import {Githubpages} from "@styled-icons/simple-icons/Githubpages";
import {Styledcomponents} from "@styled-icons/simple-icons/Styledcomponents";

export const StyledLibraryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    min-height: 150px;
    padding: 5px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.backgroundAddPrimary};
    color: ${({ theme }) => theme.colors.colorPrimary};
    border: 3px solid ${({ theme }) => theme.colors.buttonPrimary};
    border-radius: 25px;
    transition: .7s;

    &:hover {
        transform: scale(1.08);
        filter: brightness(110%);
    }
`;

export const StyledLibraryName = styled.span`
    font-size: 24px;
    font-weight: bold;
 `;

export const StyledLibraryInfo = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
`;

export const ReactIcon = styled(ReactLogo)`
    width: 24px;
`;

export const ReduxIcon = styled(Redux)`
    width: 24px;
`;

export const RouterIcon = styled(Reactrouter)`
    width: 24px;
`;

export const PagesIcon = styled(Githubpages)`
    width: 24px;
`;

export const StyledComponentsIcon = styled(Styledcomponents)`
    width: 24px;
`;
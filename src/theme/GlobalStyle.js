import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    html {
        background-color: ${({ theme }) => theme.colors.backgroundSecondary};
        color: ${({ theme }) => theme.colors.colorPrimary};
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Lato', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100dvh;
    }
`;
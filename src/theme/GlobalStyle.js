import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        background-color: ${({ theme }) => theme.colors.backgroundSecondary};
        color: ${({theme}) => theme.colors.colorPrimary};
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
`;
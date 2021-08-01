import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';

    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
`;
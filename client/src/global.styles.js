import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        height: 100%;
        background: #f0f0f0;
        ${props => props.isModalUp ? 'overflow: hidden;' : null}

    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
`;
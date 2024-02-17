import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-auth: #ffffff;
        --bg-library:#F6F7FB;
        --bg-headers:#B1B5C2;
        --bg-dark:#6D7A8D;
        --bg-light:#F5F7FA;
        --accent:#FF6B08;
        --text: #242A37;
        --text-light: #898F9F;

    }


    body {
        margin: 0;
        font-family: 'Montserrat', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: var(--bg-auth);
        color: var(--text);
    }

    p, h1, h2, h3 {
        margin: 0;
    }

    ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;

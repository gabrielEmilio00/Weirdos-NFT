import { createGlobalStyle } from 'styled-components';
import '../../node_modules/@fontsource/akaya-telivigala/index.css';
import '../../node_modules/@fontsource/sora/index.css';

const GlobalStyles = createGlobalStyle`

/* *{
    outline: 1px solid red !important;
} */

*, *::before, *::after {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Sora', sans-serif;
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
}

a {
    color: inherit;
    text-decoration: none;
}
`

export default GlobalStyles;
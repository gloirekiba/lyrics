import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    padding-top: 10em;
    font-family: "Poppins", "Open Sans Condensed";
  }

  :root { font-size: 62.5%; }

`;

export default GlobalStyle;

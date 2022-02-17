import { createGlobalStyle, css } from "styled-components";
import { normalize } from "./normalize";
import { reset } from "./reset";

const GlobalStyles = createGlobalStyle`
  ${normalize};
  ${reset}; 
  @font-face {
    font-family: "Rubik", sans-serif;
    src: url("https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900");
    font-weight: 400;
    font-style: normal;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900');
    font-family: "Rubik", sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    ${({ theme }) => css`
      background-color: ${theme.body.background};
      color: ${theme.body.color};
      font-size: ${theme.body.fontSize};
    `}
  }
`;

export default GlobalStyles;

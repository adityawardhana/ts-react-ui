import { createGlobalStyle } from "styled-components";
import { normalize } from "./_normalize";
import { reset } from "./_reset";

const GlobalStyles = createGlobalStyle`
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
  }
  ${normalize};
  ${reset};
  
`;

export default GlobalStyles;

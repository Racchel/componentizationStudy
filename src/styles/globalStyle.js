import { createGlobalStyle } from "styled-components";
import { theme } from "../styles";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif
  }

  body {
    position:relative;
  }
  
  .outerBox {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .innerBox {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  header {
    background-color: ${theme.colors.mainColor_Dark};
  }

  footer {
    position: fixed;
    bottom: 0;
    background-color: ${theme.colors.black};
  }

  header li {
    text-transform: uppercase;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";
import { FontFaceCss } from "./font";
import { AppTheme } from "./types";

const Styles = createGlobalStyle<Omit<AppTheme, "handleChangeTheme">>`
  ${FontFaceCss}

  body {
    max-width: 1200px;
    margin: 0;
    font-family: 'Titillium Web';
    color: ${({ theme }) => theme.colors.brand.black};
  }
`;

export default Styles;

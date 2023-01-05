import { css } from "styled-components";

export type FontSize =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "title1"
  | "title2"
  | "title3"
  | "subtitle1"
  | "subtitle"
  | "body1"
  | "body2"
  | "body3"
  | "figure"
  | "10px";

export type FontWeight = "xLight" | "light" | "regular" | "semiBold" | "bold";

export const fontSize: Record<FontSize, string> = {
  h1: "72px",
  h2: "64px",
  h3: "56px",
  h4: "48px",
  title1: "40px",
  title2: "32px",
  title3: "24px",
  subtitle1: "21px",
  subtitle: "18px",
  body1: "16px",
  body2: "14px",
  body3: "12px",
  figure: "11px",
  "10px": "10px",
};

export const fontWeight: Record<FontWeight, string> = {
  xLight: "200",
  light: "300",
  regular: "400",
  semiBold: "600",
  bold: "700",
};

export const FontFaceCss = css`
  /*X-Light*/
  @font-face {
    font-family: "Titillium Web";
    font-display: auto;
    src: url(/fonts/TitilliumWeb/TitilliumWeb-ExtraLight.ttf) format("truetype");
    font-weight: ${fontWeight.xLight};
    font-style: normal;
  }

  /*X-Light Italic*/
  @font-face {
    font-family: "Titillium Web";
    font-display: auto;
    src: url(/fonts/TitilliumWeb/TitilliumWeb-ExtraLightItalic.ttf)
      format("truetype");
    font-weight: ${fontWeight.xLight};
    font-style: italic;
  }

  /*Light*/
  @font-face {
    font-family: "Titillium Web";
    font-display: auto;
    src: url(/fonts/TitilliumWeb/TitilliumWeb-Light.ttf) format("truetype");
    font-weight: ${fontWeight.light};
    font-style: normal;
  }

  /*Light Italic*/
  @font-face {
    font-family: "Titillium Web";
    font-display: auto;
    src: url(/fonts/TitilliumWeb/TitilliumWeb-LightItalic.ttf)
      format("truetype");
    font-weight: ${fontWeight.light};
    font-style: italic;
  }

  /*Regular*/
  @font-face {
    font-family: "Titillium Web";
    font-display: auto;
    src: url(/fonts/TitilliumWeb/TitilliumWeb-Regular.ttf) format("truetype");
    font-weight: ${fontWeight.regular};
    font-style: normal;
  }

  /*Regular Italic*/
  @font-face {
    font-family: "Titillium Web";
    font-display: auto;
    src: url(/fonts/TitilliumWeb/TitilliumWeb-Italic.ttf) format("truetype");
    font-weight: ${fontWeight.regular};
    font-style: italic;
  }

  /*SemiBold*/
  @font-face {
    font-family: "Titillium Web";
    font-display: auto;
    src: url(/fonts/TitilliumWeb/TitilliumWeb-SemiBold.ttf) format("truetype");
    font-weight: ${fontWeight.semiBold};
    font-style: normal;
  }

  /*SemiBold Italic*/
  @font-face {
    font-family: "Titillium Web";
    font-display: auto;
    src: url(/fonts/TitilliumWeb/TitilliumWeb-SemiBoldItalic.ttf)
      format("truetype");
    font-weight: ${fontWeight.semiBold};
    font-style: italic;
  }

  /*Bold*/
  @font-face {
    font-family: "Titillium Web";
    font-display: auto;
    src: url(/fonts/TitilliumWeb/TitilliumWeb-Bold.ttf) format("truetype");
    font-weight: ${fontWeight.bold};
    font-style: normal;
  }

  /*Bold Italic*/
  @font-face {
    font-family: "Titillium Web";
    font-display: auto;
    src: url(/fonts/TitilliumWeb/TitilliumWeb-BoldItalic.ttf) format("truetype");
    font-weight: ${fontWeight.bold};
    font-style: italic;
  }
`;

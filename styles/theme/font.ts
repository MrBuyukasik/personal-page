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
`;

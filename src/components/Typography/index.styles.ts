import styled from "styled-components";
import {
  fontSize,
  FontSize,
  fontWeight,
  FontWeight,
} from "../../../styles/theme/font";

interface StyledTextProps {
  size?: FontSize;
  variant?: FontWeight;
  color?: string;
  customSize?: number;
  align?: "left" | "center" | "right";
  inline?: boolean;
}

export const Typography = styled.p<StyledTextProps>`
  ${({ align }) => (align ? `text-align: ${align};` : "")}
  ${({ inline }) => (inline ? `display: inline;` : "")}
  margin:0px;
  font-size: ${({ size, customSize }) =>
    customSize ? `${customSize}px` : fontSize[size || "body1"]};
  font-weight: ${({ variant }) => fontWeight[variant || "regular"]};
  font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

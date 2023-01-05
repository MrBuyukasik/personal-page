import { ThemeType } from "./constants";
import { Palette } from "./types";

const defaultPalette = {
  transparent: "transparent",
  current: "currentColor",
  brand: {
    gray: {
      dark: "#101820",
      default: "#374049",
      light: "#6D7781",
      medium: "#1A2127",
      thin: "#BEC1C4",
      "x-light": "#8D949A",
      "x-thin": "#EDEEEE",
      "xx-thin": "#F8F8F8",
    },
    primary: {
      dark: "#1CB2A0",
      default: "#28D8C3",
      light: "#6BEDDD",
      medium: "#22C5B1",
      thin: "#C2FAF3",
    },
    secondary: {
      dark: "#E29020",
      default: "#EFAB4E",
      light: "#FFC575",
      medium: "#E5972C",
      thin: "#FFD7A0",
    },
    error: {
      dark: "#E74C3C",
      default: "#FF7D70",
      light: "#FFB3AB",
      medium: "#ED5C4D",
      thin: "#FFEEEC",
    },
    information: {
      dark: "#3498DB",
      default: "#5EB6F1",
      light: "#96D2FA",
      medium: "#43A3E3",
      thin: "#E8F6FF",
    },
    success: {
      dark: "#42CF7E",
      default: "#7BE8A9",
      medium: "#52D78B",
      light: "#BDFED9",
      thin: "#E9FFF2",
    },
    warning: {
      dark: "#FFB800",
      default: "#F6CC4F",
      medium: "#FFBF00",
      light: "#FFE38E",
      thin: "#FFF9E8",
    },
    black: "#030910",
    white: "#FFFFFF",
  },
};

export const colors: Partial<Record<ThemeType, Palette>> = {
  [ThemeType.Light]: defaultPalette,
  [ThemeType.Dark]: defaultPalette,
};

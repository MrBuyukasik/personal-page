import { ThemeType } from "./constants";

export interface ColorTone {
  dark?: string;
  medium?: string;
  default?: string;
  light?: string;
  xLight?: string;
  thin?: string;
  xThin?: string;
  xxThin?: string;
}

export interface Palette {
  transparent: string;
  current: string;
  brand: {
    gray: ColorTone;
    primary: ColorTone;
    secondary: ColorTone;
    error: ColorTone;
    information: ColorTone;
    success: ColorTone;
    warning: ColorTone;
    black: string;
    white: string;
  };
}

export interface Theme {
  colors: Palette;
  selectedTheme: ThemeType;
}

export interface AppTheme {
  theme?: Theme;
  // eslint-disable-next-line no-unused-vars
  handleChangeTheme?: (theme: ThemeType) => void;
}

export interface StyledProps extends Omit<AppTheme, "handleChangeTheme"> {}

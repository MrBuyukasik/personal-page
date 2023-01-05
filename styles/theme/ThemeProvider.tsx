/** eslint-disable unused-imports */
import { createContext, useContext, useMemo, useState } from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { colors } from "./colors";
import { ThemeType } from "./constants";
import { AppTheme, Palette } from "./types";

export const ThemeContext = createContext<AppTheme>({
  theme: {
    colors: colors.light as Palette,
    selectedTheme: ThemeType.Light,
  },
  handleChangeTheme: () => {},
});

interface IThemeProviderProps {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
  defaultTheme?: ThemeType;
}

export function ThemeProvider({
  children,
  defaultTheme = ThemeType.Light,
}: IThemeProviderProps) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>(
    defaultTheme || ThemeType.Light
  );

  const handleChangeTheme = (theme?: ThemeType) => {
    setSelectedTheme((state?: ThemeType) => {
      if (theme) {
        return theme;
      }
      if (state === ThemeType.Dark) {
        return ThemeType.Light;
      } else {
        return ThemeType.Dark;
      }
    });
  };

  const theme = useMemo(
    () => ({
      colors: colors[selectedTheme] as Palette,
      selectedTheme,
    }),
    [selectedTheme]
  );

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <StyledThemeProvider theme={theme as DefaultTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

export function useTheme() {
  const { theme, handleChangeTheme: changeTheme } = useContext(ThemeContext);
  return { theme, changeTheme };
}

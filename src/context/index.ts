import { createContext } from "react";

export type ThemeContextType = {
  onChangeTheme: () => void;
};

export interface IThemeProvider {
  theme: {
    name: string;
    colors: {
      primary: string;
      secondary: string;
    };
  };
}

export const ThemeContext = createContext<any | null>(null);

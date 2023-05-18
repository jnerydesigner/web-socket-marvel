import { ThemeProvider } from "styled-components";
import { Home } from "./home";
import { useState } from "react";
import light from "../src/themes/light";
import dark from "../src/themes/dark";
import { ThemeContext } from "../src/context";

export function App() {
  const [theme, setTheme] = useState(dark);
  const onChangeTheme = () => {
    setTheme(theme.name === "dark" ? dark : light);
  };
  return (
    <ThemeContext.Provider value={{ onChangeTheme }}>
      <ThemeProvider theme={theme}>
        <Home onChangeTheme={onChangeTheme} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

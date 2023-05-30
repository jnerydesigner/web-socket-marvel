import { ThemeProvider } from "styled-components";
import { Home } from "./home";
import { useState } from "react";
import light from "../src/themes/light";
import dark from "../src/themes/dark";
import { ThemeContext } from "../src/context";
import { v4 as uuid } from "uuid";

const initialState = {
  id: uuid(),
  liked: false,
};

interface PropsLiked {
  id: string;
  liked: boolean;
}

export function App() {
  const [theme, setTheme] = useState(dark);
  const [likedWeb, setLikedWeb] = useState<PropsLiked>(initialState);
  const onChangeTheme = () => {
    setTheme(theme.name === "dark" ? dark : light);
  };

  const onLiked = () => {
    const liked = likedWeb.liked === true ? false : true;

    const likedReq: PropsLiked = {
      id: uuid(),
      liked,
    };
    setLikedWeb(likedReq);
  };
  return (
    <ThemeContext.Provider value={{ onChangeTheme, onLiked }}>
      <ThemeProvider theme={theme}>
        <Home onChangeTheme={onChangeTheme} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

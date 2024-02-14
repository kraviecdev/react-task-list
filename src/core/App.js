import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../common/Header/ThemeSwitch/themeSlice";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../theme/theme";
import { GlobalStyle } from "../theme/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";


const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? dark : light}>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default App;
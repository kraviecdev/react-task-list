import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer"
import Tasks from "./features/tasks/Tasks";

import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./common/ThemeSwitch/themeSlice";
import { dark, light } from "./theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Navbar from "./common/Navbar";

const App = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? dark : light}>
            <GlobalStyle />
            <Header title={"Tasks List"} 
                children={<Navbar />}
            />
            <Tasks />
            <Footer />
        </ThemeProvider>
    )
};

export default App;
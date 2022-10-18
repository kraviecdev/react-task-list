import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer"
import Tasks from "./features/tasks/Tasks";
import Menu from "./common/Menu";
import ApplicationInfo from "./features/tools/ApplicationInfo";
import About from "./features/author/About";

import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./common/ThemeSwitch/themeSlice";
import { dark, light } from "./theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Route, HashRouter, Switch } from "react-router-dom";
import { StyledNavLink } from "./common/Menu/styled";

const App = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <HashRouter>
            <ThemeProvider theme={isDarkTheme ? dark : light}>
                <GlobalStyle />
                <Header
                    title={"Tasks List"}
                    navigation={
                        <Menu
                            home={<StyledNavLink to={"/"}>Home</StyledNavLink>}
                            about={<StyledNavLink to={"/author"}>About</StyledNavLink>}
                            tools={<StyledNavLink to={"/app_info"}>Application Info</StyledNavLink>}
                        />
                    }
                />
                <Switch>
                    <Route path={"/author"} >
                        <About />
                    </Route>
                    <Route path={"/app_info"}>
                        <ApplicationInfo />
                    </Route>
                    <Route path={"/"} >
                        <Tasks />
                    </Route>
                </Switch>
                <Footer />
            </ThemeProvider>
        </HashRouter>
    )
};

export default App;
import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer"
import Tasks from "./features/tasks/Tasks";
import Menu from "./common/Menu";
import ApplicationInfo from "./features/tools/ApplicationInfo";
import About from "./features/about/About";
import TaskInfo from "./features/tasks/TaskInfo";

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
                    title={<StyledNavLink to={"/tasks"} header>Tasks List</StyledNavLink>}
                    navigation={
                        <Menu
                            title={<StyledNavLink to={"/tasks"} header>Tasks List</StyledNavLink>}
                            home={<StyledNavLink to={"/tasks"}>Tasks</StyledNavLink>}
                            about={<StyledNavLink to={"/author"}>Author</StyledNavLink>}
                            tools={<StyledNavLink to={"/app_info"}>Application Info</StyledNavLink>}
                        />
                    }
                />
                <Switch>
                    <Route exact path={"/tasks"} >
                        <Tasks />
                    </Route>
                    <Route path={"/task/:id"} >
                        <TaskInfo />
                    </Route>
                    <Route exact path={"/author"} >
                        <About />
                    </Route>
                    <Route exact path={"/app_info"}>
                        <ApplicationInfo />
                    </Route>
                </Switch>
                <Footer />
            </ThemeProvider>
        </HashRouter>
    )
};

export default App;
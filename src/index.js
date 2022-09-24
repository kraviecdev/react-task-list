import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import reportWebVitals from './reportWebVitals';
import { light } from './theme';
import { ThemeProvider } from 'styled-components';
import store from './store';

import App from './App';
import Footer from './common/Footer';
import Header from './common/Header';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Header title={"Tasks List"}/>
        <App />
        <Footer />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import App from "./App";
import "../node_modules/normalize.css/normalize.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetInTouch from "./GetInTouch";
//import reportWebVitals from './reportWebVitals';
import { IntlProvider } from "react-intl";
import Wrapper from "./components/Wrapper";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper>
        <App date={Date.now()} />
      </Wrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

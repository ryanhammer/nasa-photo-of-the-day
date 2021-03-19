import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from 'styled-components';
import "./index.css";
import Theme from './theme';
import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
  <App />
  </ThemeProvider>,
  document.getElementById("root")
);

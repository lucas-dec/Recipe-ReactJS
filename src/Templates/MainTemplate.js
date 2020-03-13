import React from "react";
import GlobalStyle from "../Theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../Theme/MainStyle";
import Sidebar from "../components/Sidebar/Sidebar";

const MainTemplates = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Sidebar />
    {children}
  </ThemeProvider>
);

export default MainTemplates;

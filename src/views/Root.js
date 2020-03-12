import React from "react";
import GlobalStyle from "../Theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../Theme/MainStyle";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Sidebar />
      <Header />
    </ThemeProvider>
  );
}

export default Root;

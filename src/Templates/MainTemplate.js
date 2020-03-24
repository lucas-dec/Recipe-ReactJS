import React from "react";
import GlobalStyle from "../Theme/GlobalStyle";
import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import { theme } from "../Theme/MainStyle";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 13vw;
`;

const MainTemplates = ({ children, bgHeader, ...props }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Sidebar />
    <WrapperContent>
      <Header bgImage={bgHeader} mainHeader={props.mainHeader}>
        {props.title}
      </Header>
      {children}
    </WrapperContent>
  </ThemeProvider>
);

export default MainTemplates;

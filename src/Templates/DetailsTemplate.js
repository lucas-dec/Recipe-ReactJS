import React from "react";
import GlobalStyle from "../Theme/GlobalStyle";
import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import { theme } from "../Theme/MainStyle";
import Sidebar from "../components/Sidebar/Sidebar";

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 13vw;
`;

const DetailsTemplate = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Sidebar />
    <WrapperContent>{children}</WrapperContent>
  </ThemeProvider>
);

export default DetailsTemplate;

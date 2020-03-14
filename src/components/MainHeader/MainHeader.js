import React from "react";
import styled from "styled-components";
import bgHeader from "../../assets/background/bg-header.jpg";
import logoWhite from "../../assets/logo/logo-white.png";
import Heading from "../Heading/Heading";
import Search from "../Search/Search";

const Wrapper = styled.div`
  width: 100%;
  height: 45vh;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5),
      rgba(0, 0, 0, 0.6),
      rgba(255, 255, 255, 0.5)
    ),
    url(${bgHeader});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
`;

const MainHeader = () => (
  <Wrapper>
    <Logo src={logoWhite} />
    <Heading>Organic natura food</Heading>
    <Search />
  </Wrapper>
);

export default MainHeader;

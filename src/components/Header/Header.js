import React from "react";
import styled, { css } from "styled-components";
import Heading from "../Heading/Heading";
import logoWhite from "../../assets/logo/logo-white.png";
import Search from "../Search/Search";

const Wrapper = styled.div`
  width: 100%;
  height: 30vh;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5),
      rgba(0, 0, 0, 0.6),
      rgba(255, 255, 255, 0.5)
    ),
    url(${({ bgImage }) => bgImage});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ mainHeader }) =>
    mainHeader &&
    css`
      height: 45vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
`;

const Logo = styled.img`
  width: 150px;
`;

const Header = ({ bgImage, children, ...props }) => (
  <Wrapper bgImage={bgImage} mainHeader={props.mainHeader}>
    {props.mainHeader && <Logo src={logoWhite} />}
    <Heading>{children}</Heading>
    {props.mainHeader && <Search />}
  </Wrapper>
);

export default Header;

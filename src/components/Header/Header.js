import React from "react";
import styled from "styled-components";
import Heading from "../Heading/Heading";

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
`;

const Header = ({ children, bgImage }) => (
  <Wrapper bgImage={bgImage}>
    <Heading>{children}</Heading>
  </Wrapper>
);

export default Header;

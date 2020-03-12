import React from "react";
import styled from "styled-components";
import { theme } from "../../Theme/MainStyle";

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 0.8rem;
  text-transform: uppercase;
  border-bottom: 1px solid ${theme.ligthGrey};
  transition: all 0.25s;

  :last-of-type {
    border: none;
  }

  :hover {
    cursor: pointer;
    background-color: ${theme.ligthGrey};
  }

  img {
    display: block;
    width: 32px;
  }
`;

const ButtonNav = ({ children, icon }) => (
  <Button>
    <img src={icon} alt={icon} />
    {children}
  </Button>
);

export default ButtonNav;

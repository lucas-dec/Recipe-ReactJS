import styled from "styled-components";
import { theme } from "../../Theme/MainStyle";

const ButtonNav = styled.button`
  width: 100%;
  height: 100px;
  font-size: 0.8rem;
  text-transform: uppercase;
  border-bottom: 1px solid ${theme.ligthGrey};
  transition: all 0.25s;
  background-image: url(${({ icon }) => icon});
  background-position: 50% 30%;
  background-size: 32px;
  background-color: transparent;
  background-repeat: no-repeat;
  text-align: center;
  text-decoration: none;
  padding-top: 5em;

  :last-of-type {
    border: none;
  }
  &.active {
    border-right: 4px solid ${theme.primary};
    background-color: ${theme.lightPrimary};
  }

  :hover {
    cursor: pointer;
    background-color: ${theme.ligthGrey};
  }
`;

export default ButtonNav;

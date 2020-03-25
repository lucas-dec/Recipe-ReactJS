import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../../Theme/MainStyle";
import ErrorIcon from "../../assets/icons/error.png";
import InfoIcon from "../../assets/icons/info.png";

const WrapperNotification = styled.div`
  position: fixed;
  top: 65%;
  border: 5px solid;
  border-radius: 10px;
  box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.7);
  border-color: ${({ error }) => (error ? theme.primary : theme.dark)};
  transform: translateY(-50%);
  width: 30%;
  height: 30vh;
  padding: 2em;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Pulse = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  animation: ${Pulse} 2s ease-in-out 0s infinite;
`;

const Info = styled.p`
  color: ${({ error }) => (error ? theme.primary : theme.dark)};
  font-size: ${theme.mediumFont};
  text-align: center;
  margin-top: 0.5em;
`;

const Notification = ({ children, error }) => (
  <WrapperNotification error={error}>
    <Icon src={error ? ErrorIcon : InfoIcon} />
    <Info error={error}>
      {error
        ? error
        : "We are looking for recipes specially for You ! please, wait a second ..."}
    </Info>
  </WrapperNotification>
);

export default Notification;

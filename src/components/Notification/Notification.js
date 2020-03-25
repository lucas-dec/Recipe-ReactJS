import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../../Theme/MainStyle";
import ErrorIcon from "../../assets/icons/error.png";
import InfoIcon from "../../assets/icons/info.png";

const WrapperNotification = styled.div`
  width: 30%;
  margin-top: 2em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  <WrapperNotification>
    <Icon src={error ? ErrorIcon : InfoIcon} />
    <Info error={error}>
      {error
        ? error
        : "We are looking for recipes specially for You ! please, wait a second ..."}
    </Info>
  </WrapperNotification>
);

export default Notification;

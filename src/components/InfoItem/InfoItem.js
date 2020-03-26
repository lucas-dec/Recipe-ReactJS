import React from "react";
import styled from "styled-components";
import { theme } from "../../Theme/MainStyle";

const InfoBox = styled.div`
  width: 100px;
  height: 100px;
  border-right: 2px solid ${theme.darkGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  :last-of-type {
    border: none;
  }

  img {
    width: 50%;
  }
`;

const Label = styled.p`
  color: ${theme.lightPrimary};
  font-size: ${theme.mediumFont};
  margin: 0;
  text-align: center;
`;
const InfoItem = ({ icon, children }) => (
  <InfoBox>
    <img src={icon} alt={icon} />
    <Label>{children}</Label>
  </InfoBox>
);

export default InfoItem;

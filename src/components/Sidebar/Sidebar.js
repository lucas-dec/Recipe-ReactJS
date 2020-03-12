import React from "react";
import styled from "styled-components";
import logoImage from "../../assets/logo.png";
import { theme } from "../../Theme/MainStyle";
import ButtonNav from "../ButonNav/ButtonNav";
import recommendedIcon from "../../assets/icons/recommended.png";
import dinnerIcon from "../../assets/icons/dinner.png";
import blenderIcon from "../../assets/icons/blender.png";
import saladIcon from "../../assets/icons/salad.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 100vh;
  background-color: #fff;
  padding: 2em 0;
  position: fixed;
  left: 0;
  top: 0;
  border-right: 6px solid ${theme.primary};
`;

const Logo = styled.img`
  width: 80px;
`;

const Navi = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 80px;
`;

const Sidebar = () => (
  <Wrapper>
    <Logo src={logoImage} />
    <Navi>
      <ButtonNav icon={recommendedIcon}>Recommended</ButtonNav>
      <ButtonNav icon={dinnerIcon}>Main course</ButtonNav>
      <ButtonNav icon={blenderIcon}>Drink / coctails</ButtonNav>
      <ButtonNav icon={saladIcon}>Salad</ButtonNav>
    </Navi>
  </Wrapper>
);

export default Sidebar;

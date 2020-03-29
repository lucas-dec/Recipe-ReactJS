import React from "react";
import { NavLink, Link } from "react-router-dom";

import styled from "styled-components";
import logoImage from "../../assets/logo/logo.png";
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
  width: 13vw;
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
    <Link to="/recommended">
      <Logo src={logoImage} />
    </Link>
    <Navi>
      <ButtonNav
        as={NavLink}
        to="/recommended"
        activeclass="active"
        icon={recommendedIcon}
      >
        Recommended
      </ButtonNav>

      <ButtonNav
        as={NavLink}
        to="/maincourse"
        activeclass="active"
        icon={dinnerIcon}
      >
        Main Course
      </ButtonNav>

      <ButtonNav
        as={NavLink}
        to="/coctails"
        activeclass="active"
        icon={blenderIcon}
      >
        Drink / coctails
      </ButtonNav>

      <ButtonNav
        as={NavLink}
        to="/salad"
        activeclass="active"
        icon={saladIcon}
      >
        Salad
      </ButtonNav>
    </Navi>
  </Wrapper>
);

export default Sidebar;

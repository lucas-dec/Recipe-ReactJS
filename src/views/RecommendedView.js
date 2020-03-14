import React from "react";
import styled from "styled-components";
import MainTemplate from "../Templates/MainTemplate";
import MainHeader from "../components/MainHeader/MainHeader";
import logoWhite from "../assets/logo/logo-white.png";
import ItemsList from "../components/ItemsList/ItemsList";
import Search from "../components/Search/Search";

const Logo = styled.img`
  width: 150px;
`;

function RecommendedView() {
  return (
    <MainTemplate>
      <MainHeader>
        <Logo src={logoWhite} />
        Organic natura food
        <Search />
      </MainHeader>
      <ItemsList />
    </MainTemplate>
  );
}

export default RecommendedView;

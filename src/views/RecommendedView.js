import React from "react";
import styled from "styled-components";
import MainTemplate from "../Templates/MainTemplate";
import MainHeader from "../components/MainHeader/MainHeader";
import logoWhite from "../assets/logo/logo-white.png";
import ItemsList from "../components/ItemsList/ItemsList";
import Search from "../components/Search/Search";
import { Recipes } from "../data/Recipes";

const Logo = styled.img`
  width: 150px;
`;

const RecommendedView = ({ location }) => {
  const recipesRecommended = Recipes.filter(recipe => recipe.score > 80);
  return (
    <MainTemplate>
      <MainHeader>
        <Logo src={logoWhite} />
        Organic natura food
        <Search />
      </MainHeader>
      <ItemsList path={location.pathname} recipes={recipesRecommended} />
    </MainTemplate>
  );
};

export default RecommendedView;

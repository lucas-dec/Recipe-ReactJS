import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import MainTemplate from "../Templates/MainTemplate";
import MainHeader from "../components/MainHeader/MainHeader";
import logoWhite from "../assets/logo/logo-white.png";
import ItemsList from "../components/ItemsList/ItemsList";
import Search from "../components/Search/Search";

const Logo = styled.img`
  width: 150px;
`;

const RecommendedView = ({ location, data }) => {
  const recipesRecommended = Object.values(data)
    .flat()
    .filter(recipe => recipe.score > 90);

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

const mapStateToProps = state => ({ data: state });
export default connect(mapStateToProps)(RecommendedView);

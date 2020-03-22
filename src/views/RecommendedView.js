import React from "react";
import { connect } from "react-redux";

import MainTemplate from "../Templates/MainTemplate";
import bgHeader from "../assets/background/bg-header.jpg";
import ItemsList from "../components/ItemsList/ItemsList";

const RecommendedView = ({ location, data }) => {
  const recipesRecommended = Object.values(data)
    .flat()
    .filter(recipe => recipe.score > 90);

  return (
    <MainTemplate bgHeader={bgHeader} title="Organic natura food" mainHeader>
      <ItemsList path={location.pathname} recipes={recipesRecommended} />
    </MainTemplate>
  );
};

const mapStateToProps = state => ({ data: state });
export default connect(mapStateToProps)(RecommendedView);

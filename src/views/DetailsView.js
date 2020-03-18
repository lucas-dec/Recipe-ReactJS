import React from "react";
import { connect } from "react-redux";

import MainTemplate from "../Templates/MainTemplate";
import DetailsItem from "../components/DetailsItem/DetailsItem";

const DetailsView = ({ match, data }) => {
  const recipe = Object.values(data)
    .flat()
    .find(recipe => recipe.id === parseInt(match.params.id));

  return <MainTemplate>{<DetailsItem recipe={recipe} />}</MainTemplate>;
};

const mapStateToProps = state => {
  return { data: state };
};

export default connect(mapStateToProps)(DetailsView);

import React from "react";
import MainTemplate from "../Templates/MainTemplate";
import DetailsItem from "../components/DetailsItem/DetailsItem";
import { Recipes } from "../data/Recipes";

const DetailsView = ({ match }) => {
  const recipe = Recipes.filter(
    recipe => recipe.id === parseInt(match.params.id)
  );
  return (
    <MainTemplate>
      <DetailsItem recipe={recipe} />
    </MainTemplate>
  );
};
export default DetailsView;

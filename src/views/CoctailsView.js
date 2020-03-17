import React from "react";
import MainTemplate from "../Templates/MainTemplate";
import ItemsList from "../components/ItemsList/ItemsList";
import Header from "../components/Header/Header";
import bgImage from "../assets/background/bg-coctails.jpg";
import { Recipes } from "../data/Recipes";

const CoctailsView = ({ location }) => {
  const recipesCoctails = Recipes.filter(recipe => recipe.type === "coctails");
  return (
    <MainTemplate>
      <Header bgImage={bgImage}>Drink and Coctails</Header>
      <ItemsList path={location.pathname} recipes={recipesCoctails} />
    </MainTemplate>
  );
};

export default CoctailsView;

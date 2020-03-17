import React from "react";
import MainTemplate from "../Templates/MainTemplate";
import ItemsList from "../components/ItemsList/ItemsList";
import Header from "../components/Header/Header";
import bgImage from "../assets/background/bg-salad.jpg";
import { Recipes } from "../data/Recipes";

const SaladView = ({ location }) => {
  const recipesSalad = Recipes.filter(recipe => recipe.type === "salad");
  return (
    <MainTemplate>
      <Header bgImage={bgImage}>Salad</Header>
      <ItemsList path={location.pathname} recipes={recipesSalad} />
    </MainTemplate>
  );
};

export default SaladView;

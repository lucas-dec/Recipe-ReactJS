import React from "react";
import MainTemplate from "../Templates/MainTemplate";
import ItemsList from "../components/ItemsList/ItemsList";
import Header from "../components/Header/Header";
import bgImage from "../assets/background/bg-main-course.jpg";
import { Recipes } from "../data/Recipes";

const MainCourseView = ({ location }) => {
  const recipesMainCourse = Recipes.filter(
    recipe => recipe.type === "main course"
  );
  return (
    <MainTemplate>
      <Header bgImage={bgImage}>Main course</Header>
      <ItemsList path={location.pathname} recipes={recipesMainCourse} />
    </MainTemplate>
  );
};
export default MainCourseView;

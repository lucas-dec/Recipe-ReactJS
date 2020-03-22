import React from "react";
import { connect } from "react-redux";

import MainTemplate from "../Templates/MainTemplate";
import bgHeader from "../assets/background/bg-main-course.jpg";
import ItemsList from "../components/ItemsList/ItemsList";
import LoadNewRecipes from "../components/LoadNewRecipes/LoadNewRecipes";

const MainCourseView = ({ location, mainCourse }) => {
  return (
    <MainTemplate bgHeader={bgHeader} title="Main course">
      <ItemsList path={location.pathname} recipes={mainCourse} />
      <LoadNewRecipes />
    </MainTemplate>
  );
};
const mapStateToProps = ({ mainCourse }) => ({ mainCourse });
export default connect(mapStateToProps)(MainCourseView);

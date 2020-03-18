import React from "react";
import { connect } from "react-redux";

import MainTemplate from "../Templates/MainTemplate";
import ItemsList from "../components/ItemsList/ItemsList";
import Header from "../components/Header/Header";
import bgImage from "../assets/background/bg-main-course.jpg";

const MainCourseView = ({ location, mainCourse }) => {
  return (
    <MainTemplate>
      <Header bgImage={bgImage}>Main course</Header>
      <ItemsList path={location.pathname} recipes={mainCourse} />
    </MainTemplate>
  );
};
const mapStateToProps = ({ mainCourse }) => ({ mainCourse });
export default connect(mapStateToProps)(MainCourseView);

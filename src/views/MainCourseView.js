import React from "react";
import MainTemplate from "../Templates/MainTemplate";
import ItemsList from "../components/ItemsList/ItemsList";
import Header from "../components/Header/Header";
import bgImage from "../assets/background/bg-main-course.jpg";

function MainCourseView() {
  return (
    <MainTemplate>
      <Header bgImage={bgImage}>Main course</Header>
      <ItemsList />
    </MainTemplate>
  );
}

export default MainCourseView;

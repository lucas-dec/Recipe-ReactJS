import React from "react";
import MainTemplate from "../Templates/MainTemplate";
import ItemsList from "../components/ItemsList/ItemsList";

function MainCourseView() {
  return (
    <MainTemplate>
      <h1>Main course</h1>
      <ItemsList />
    </MainTemplate>
  );
}

export default MainCourseView;

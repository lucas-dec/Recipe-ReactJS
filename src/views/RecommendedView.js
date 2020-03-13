import React from "react";
import MainTemplate from "../Templates/MainTemplate";
import Header from "../components/Header/Header";
import ItemsList from "../components/ItemsList/ItemsList";

function RecommendedView() {
  return (
    <MainTemplate>
      <Header />
      <ItemsList />
    </MainTemplate>
  );
}

export default RecommendedView;

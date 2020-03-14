import React from "react";
import MainTemplate from "../Templates/MainTemplate";
import ItemsList from "../components/ItemsList/ItemsList";
import Header from "../components/Header/Header";
import bgImage from "../assets/background/bg-salad.jpg";

function SaladView() {
  return (
    <MainTemplate>
      <Header bgImage={bgImage}>Salad</Header>
      <ItemsList />
    </MainTemplate>
  );
}

export default SaladView;

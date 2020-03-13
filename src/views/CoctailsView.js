import React from "react";
import MainTemplate from "../Templates/MainTemplate";
import ItemsList from "../components/ItemsList/ItemsList";
import Header from "../components/Header/Header";
import bgImage from "../assets/bg-coctails.jpg";

function CoctailsView() {
  return (
    <MainTemplate>
      <Header bgImage={bgImage}>Drink and Coctails</Header>
      <ItemsList />
    </MainTemplate>
  );
}

export default CoctailsView;

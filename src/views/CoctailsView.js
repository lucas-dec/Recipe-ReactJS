import React from "react";
import MainTemplate from "../Templates/MainTemplate";
import ItemsList from "../components/ItemsList/ItemsList";

function CoctailsView() {
  return (
    <MainTemplate>
      <h1>Drink and Coctails</h1>
      <ItemsList />
    </MainTemplate>
  );
}

export default CoctailsView;

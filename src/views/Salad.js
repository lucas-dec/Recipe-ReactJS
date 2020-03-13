import React from "react";
import MainTemplate from "../Templates/MainTemplate";
import ItemsList from "../components/ItemsList/ItemsList";

function SaladView() {
  return (
    <MainTemplate>
      <h1>Salad</h1>
      <ItemsList />
    </MainTemplate>
  );
}

export default SaladView;

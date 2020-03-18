import React from "react";
import { connect } from "react-redux";

import MainTemplate from "../Templates/MainTemplate";
import ItemsList from "../components/ItemsList/ItemsList";
import Header from "../components/Header/Header";
import bgImage from "../assets/background/bg-salad.jpg";

const SaladView = ({ location, salad }) => {
  return (
    <MainTemplate>
      <Header bgImage={bgImage}>Salad</Header>
      <ItemsList path={location.pathname} recipes={salad} />
    </MainTemplate>
  );
};

const mapStateToProps = ({ salad }) => ({ salad });
export default connect(mapStateToProps)(SaladView);

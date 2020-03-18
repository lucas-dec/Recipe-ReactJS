import React from "react";
import { connect } from "react-redux";

import MainTemplate from "../Templates/MainTemplate";
import ItemsList from "../components/ItemsList/ItemsList";
import Header from "../components/Header/Header";
import bgImage from "../assets/background/bg-coctails.jpg";

const CoctailsView = ({ location, coctails }) => {
  return (
    <MainTemplate>
      <Header bgImage={bgImage}>Drink and Coctails</Header>
      <ItemsList path={location.pathname} recipes={coctails} />
    </MainTemplate>
  );
};

const mapStateToProps = ({ coctails }) => ({ coctails });

export default connect(mapStateToProps)(CoctailsView);

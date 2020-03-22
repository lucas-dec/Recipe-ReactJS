import React from "react";
import { connect } from "react-redux";

import MainTemplate from "../Templates/MainTemplate";
import bgHeader from "../assets/background/bg-coctails.jpg";
import ItemsList from "../components/ItemsList/ItemsList";

const CoctailsView = ({ location, coctails }) => {
  return (
    <MainTemplate bgHeader={bgHeader} title={"Drink and Coctails"}>
      <ItemsList path={location.pathname} recipes={coctails} />
    </MainTemplate>
  );
};

const mapStateToProps = ({ coctails }) => ({ coctails });

export default connect(mapStateToProps)(CoctailsView);

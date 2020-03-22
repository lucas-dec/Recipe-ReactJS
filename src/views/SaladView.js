import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/index";

import MainTemplate from "../Templates/MainTemplate";
import bgHeader from "../assets/background/bg-salad.jpg";
import ItemsList from "../components/ItemsList/ItemsList";

class SaladView extends Component {
  componentDidMount() {
    this.props.fetchSalad();
  }

  render() {
    const { location, salad } = this.props;
    return (
      <MainTemplate bgHeader={bgHeader} title="Salad">
        <ItemsList path={location.pathname} recipes={salad} />
      </MainTemplate>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSalad: () => dispatch(fetchRecipes("salad"))
});
const mapStateToProps = ({ salad }) => ({ salad });
export default connect(mapStateToProps, mapDispatchToProps)(SaladView);

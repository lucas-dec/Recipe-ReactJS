import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/index";

import MainTemplate from "../Templates/MainTemplate";
import bgHeader from "../assets/background/bg-coctails.jpg";
import ItemsList from "../components/ItemsList/ItemsList";
import LoadNewRecipes from "../components/LoadNewRecipes/LoadNewRecipes";

class CoctailsView extends Component {
  componentDidMount() {
    if (this.props.coctails.length === 0) this.props.fetchRecipes("drink");
  }

  render() {
    const { location, coctails, isLoading, errMess } = this.props;
    return (
      <MainTemplate bgHeader={bgHeader} title={"Drink and Coctails"}>
        <ItemsList path={location.pathname} recipes={coctails} />
        {isLoading && <h1>Recipes are loading ... </h1>}
        {errMess && <h1>{errMess}</h1>}

        {coctails.length > 0 && (
          <LoadNewRecipes newRecipes={this.handleLoadNewRecipes} />
        )}
      </MainTemplate>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchRecipes: category => dispatch(fetchRecipes(category))
});

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    errMess: state.errMess,
    coctails: state.drink
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoctailsView);

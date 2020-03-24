import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/index";

import MainTemplate from "../Templates/MainTemplate";
import bgHeader from "../assets/background/bg-salad.jpg";
import ItemsList from "../components/ItemsList/ItemsList";
import LoadNewRecipes from "../components/LoadNewRecipes/LoadNewRecipes";

class SaladView extends Component {
  componentDidMount() {
    if (this.props.salad.length === 0) this.props.fetchRecipes("salad");
  }

  handleLoadNewRecipes = () => {
    this.props.fetchRecipes("salad");
  };

  render() {
    const { location, salad, isLoading, errMess } = this.props;
    return (
      <MainTemplate bgHeader={bgHeader} title="Salad">
        <ItemsList path={location.pathname} recipes={salad} />
        {isLoading && <h1>Recipes are loading ... </h1>}
        {errMess && <h1>{errMess}</h1>}

        {salad.length > 0 && (
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
    salad: state.salad,
    isLoading: state.isLoading,
    errMess: state.errMess
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SaladView);

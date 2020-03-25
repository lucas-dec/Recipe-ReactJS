import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/index";

import MainTemplate from "../Templates/MainTemplate";
import bgHeader from "../assets/background/bg-coctails.jpg";
import ItemsList from "../components/ItemsList/ItemsList";
import Notification from "../components/Notification/Notification";
import LoadNewRecipes from "../components/LoadNewRecipes/LoadNewRecipes";

class CoctailsView extends Component {
  componentDidMount() {
    if (this.props.coctails.length === 0) this.props.fetchRecipes("drink");
  }

  handleLoadNewRecipes = () => {
    this.props.fetchRecipes("drink");
  };

  render() {
    const { location, coctails, isLoading, errMess } = this.props;
    return (
      <MainTemplate bgHeader={bgHeader} title={"Drink and Coctails"}>
        <ItemsList path={location.pathname} recipes={coctails} />
        {isLoading && <Notification />}
        {errMess && <Notification error={errMess} />}

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
    errMess: state.error,
    coctails: state.drink
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoctailsView);

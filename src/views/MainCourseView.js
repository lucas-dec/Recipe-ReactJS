import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/index";

import MainTemplate from "../Templates/MainTemplate";
import bgHeader from "../assets/background/bg-main-course.jpg";
import ItemsList from "../components/ItemsList/ItemsList";
import LoadNewRecipes from "../components/LoadNewRecipes/LoadNewRecipes";

class MainCourseView extends Component {
  componentDidMount() {
    if (this.props.mainCourse.length === 0)
      this.props.fetchRecipes("main course");
  }

  handleLoadNewRecipes = () => {
    this.props.fetchRecipes("main course");
  };

  render() {
    const { location, mainCourse, isLoading, errMess } = this.props;
    return (
      <MainTemplate bgHeader={bgHeader} title={"main course"}>
        <ItemsList path={location.pathname} recipes={mainCourse} />
        {isLoading && <h1>Recipes are loading ... </h1>}
        {errMess && <h1>{errMess}</h1>}

        {mainCourse.length > 0 && (
          <LoadNewRecipes newRecipes={this.handleLoadNewRecipes} />
        )}
      </MainTemplate>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: category => dispatch(fetchRecipes(category))
  };
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    errMess: state.errMess,
    mainCourse: state.mainCourse
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainCourseView);

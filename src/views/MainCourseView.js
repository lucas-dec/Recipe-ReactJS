import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/index";

import MainTemplate from "../Templates/MainTemplate";
import bgHeader from "../assets/background/bg-main-course.jpg";
import ItemsList from "../components/ItemsList/ItemsList";
import Notification from "../components/Notification/Notification";
import LoadNewRecipes from "../components/LoadNewRecipes/LoadNewRecipes";
import { removeDuplicateRecipe } from "../functions/functions";

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
    const processedRecipes = removeDuplicateRecipe(mainCourse);

    return (
      <MainTemplate bgHeader={bgHeader} title={"main course"}>
        <ItemsList path={location.pathname} recipes={processedRecipes} />
        {isLoading && <Notification />}
        {errMess && <Notification error={errMess} />}

        {processedRecipes.length > 0 && (
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
    errMess: state.error,
    mainCourse: state.mainCourse
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainCourseView);

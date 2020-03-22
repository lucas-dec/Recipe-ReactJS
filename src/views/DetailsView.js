import React, { Component } from "react";
import MainTemplate from "../Templates/MainTemplate";
import DetailsItem from "../components/DetailsItem/DetailsItem";

class DetailsView extends Component {
  state = {
    activeRecipesCategory: "recommended"
  };

  componentDidMount() {
    const {
      match: { path }
    } = this.props;

    switch (path) {
      case "/recommended/:id":
        this.setState({
          activeRecipesCategory: "recommended"
        });
        break;
      case "/maincourse/:id":
        this.setState({
          activeRecipesCategory: "maincourse"
        });
        break;
      case "/coctails/:id":
        this.setState({
          activeRecipesCategory: "coctails"
        });
        break;
      case "/salad/:id":
        this.setState({
          activeRecipesCategory: "salad"
        });
        break;
      default:
        this.setState({
          activeRecipesCategory: "recommended"
        });
    }
  }

  render() {
    return (
      <>
        <MainTemplate>{<DetailsItem />}</MainTemplate>
      </>
    );
  }
}

export default DetailsView;

import React, { Component } from "react";
import DetailsTemplate from "../Templates/DetailsTemplate";
import DetailsItem from "../components/DetailsItem/DetailsItem";

class DetailsView extends Component {
  state = {
    activeRecipesCategory: "recommended",
    isLoading: true,
    recipe: {}
  };

  componentDidMount() {
    const {
      match: { path, params }
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

    const fetchDetailRecipe = id => {
      const apiKey = "bff6f87cb12a492ab3b79fcdc277e1c8";
      const API = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

      fetch(API)
        .then(response => {
          if (response.ok) return response;
          else {
            throw Error;
          }
        })
        .then(response => response.json())
        .then(recipeInfo => {
          this.setState({
            isLoading: false,
            recipe: recipeInfo
          });
        })
        .catch(err => new Error(err));
    };

    fetchDetailRecipe(params.id);
  }

  render() {
    return (
      <>
        <DetailsTemplate>
          {this.state.isLoading ? (
            <h1>Your recipe is loading ...</h1>
          ) : (
            <DetailsItem recipe={this.state.recipe} />
          )}
        </DetailsTemplate>
      </>
    );
  }
}

export default DetailsView;

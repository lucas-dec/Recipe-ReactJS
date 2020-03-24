import React, { Component } from "react";
import DetailsTemplate from "../Templates/DetailsTemplate";
import DetailsItem from "../components/DetailsItem/DetailsItem";

class DetailsView extends Component {
  state = {
    activeRecipesCategory: "recommended",
    isLoading: true,
    error: null,
    recipe: null
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
        .then(
          response => {
            if (response.ok) return response;
            else {
              const error = new Error(
                `Error ${response.status} ${response.statusText}. Please try agine ...`
              );
              error.response = response;
              throw error;
            }
          },

          error => {
            const errMessage = new Error(
              `${error.message}. Please check your network connection and try agine later.`
            );
            throw errMessage;
          }
        )
        .then(response => response.json())
        .then(recipeInfo => {
          this.setState({
            isLoading: false,
            recipe: recipeInfo
          });
        })
        .catch(err => {
          this.setState({
            isLoading: false,
            error: err.message
          });
        });
    };

    fetchDetailRecipe(params.id);
  }

  render() {
    return (
      <>
        <DetailsTemplate>
          {this.state.isLoading && <h1>Your recipe is loading ...</h1>}
          {this.state.error && <h1>{this.state.error}</h1>}
          {this.state.recipe && <DetailsItem recipe={this.state.recipe} />}
        </DetailsTemplate>
      </>
    );
  }
}

export default DetailsView;

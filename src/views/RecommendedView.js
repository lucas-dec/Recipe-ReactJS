import React, { Component } from "react";

import MainTemplate from "../Templates/MainTemplate";
import bgHeader from "../assets/background/bg-header.jpg";
import ItemsList from "../components/ItemsList/ItemsList";
import Notification from "../components/Notification/Notification";

class RecommendedView extends Component {
  state = {
    isLoading: true,
    error: null,
    recipes: null
  };

  componentDidMount() {
    const apiKey = "bff6f87cb12a492ab3b79fcdc277e1c8";
    const API = `https://api.spoonacular.com/recipes/random?number=3&apiKey=${apiKey}`;

    fetch(API)
      .then(
        response => {
          if (response.ok) return response;
          else {
            const error = new Error(
              `Error ${response.status} ${response.statusText}. Please try agine ...`
            );
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
      .then(recipes => {
        this.setState({
          isLoading: false,
          recipes: recipes.recipes
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          error: err.message
        });
      });
  }

  render() {
    const { location } = this.props;
    const { isLoading, error, recipes } = this.state;
    return (
      <MainTemplate bgHeader={bgHeader} title="Organic natura food" mainHeader>
        {isLoading && (
          <Notification>
            We are looking recipes specialy for You ! please, wait a second ...
          </Notification>
        )}
        {error && <Notification error>{error}</Notification>}
        {recipes && <ItemsList path={location.pathname} recipes={recipes} />}
      </MainTemplate>
    );
  }
}

export default RecommendedView;

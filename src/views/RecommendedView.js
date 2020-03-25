import React, { Component } from "react";

import MainTemplate from "../Templates/MainTemplate";
import bgHeader from "../assets/background/bg-header.jpg";
import ItemsList from "../components/ItemsList/ItemsList";
import Notification from "../components/Notification/Notification";

class RecommendedView extends Component {
  state = {
    isLoading: true,
    errMess: null,
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
          errMess: err.message
        });
      });
  }

  render() {
    const { location } = this.props;
    const { isLoading, errMess, recipes } = this.state;
    console.log(errMess);
    return (
      <MainTemplate bgHeader={bgHeader} title="Organic natura food" mainHeader>
        {isLoading && <Notification />}
        {errMess && <Notification error={errMess} />}
        {recipes && <ItemsList path={location.pathname} recipes={recipes} />}
      </MainTemplate>
    );
  }
}

export default RecommendedView;

import React, { Component } from "react";
import MainTemplate from "../Templates/MainTemplate";
import bgHeader from "../assets/background/bg-header.jpg";
import ItemsList from "../components/ItemsList/ItemsList";
import Notification from "../components/Notification/Notification";

class SearchView extends Component {
  state = {
    searchValue: "",
    isLoading: true,
    errMess: null,
    recipes: null
  };

  componentDidMount() {
    this.setState({
      searchValue: this.props.match.params.search
    });
    const apiKey = "bff6f87cb12a492ab3b79fcdc277e1c8";
    const API = `https://api.spoonacular.com/recipes/search?query=${this.state.searchValue}&apiKey=${apiKey}`;

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
          recipes: recipes.results
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          errMess: err.message
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.props.match.params.search) {
      this.setState({
        searchValue: this.props.match.params.search,
        recipes: null
      });
      const apiKey = "bff6f87cb12a492ab3b79fcdc277e1c8";
      const API = `https://api.spoonacular.com/recipes/search?query=${this.state.searchValue}&apiKey=${apiKey}`;

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
            recipes: recipes.results
          });
        })
        .catch(err => {
          this.setState({
            isLoading: false,
            errMess: err.message
          });
        });
    }
  }

  render() {
    const { location } = this.props;
    const { isLoading, errMess, recipes } = this.state;

    return (
      <MainTemplate
        bgHeader={bgHeader}
        title={`Search recipes ${this.state.searchValue}`}
        mainHeader
      >
        {isLoading && <Notification />}
        {errMess && <Notification error={errMess} />}
        {recipes && recipes.length === 0 && (
          <Notification
            error={`Sorry, we can't find recipe like: "${this.state.searchValue}". Please check and insert name of recipe one more time.`}
          />
        )}
        {recipes && recipes.length > 0 && (
          <ItemsList path={location.pathname} recipes={recipes} />
        )}
      </MainTemplate>
    );
  }
}

export default SearchView;

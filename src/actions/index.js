import {
  RECIPES_LOADING,
  RECIPES_FAILED,
  RECIPES_SUCCESS
} from "./ActionTypes";

export const fetchRecipes = category => dispatch => {
  dispatch(recipesLoading(true));
  return fetch(
    `https://api.spoonacular.com/recipes/random?number=6&tags=${category}&apiKey=bff6f87cb12a492ab3b79fcdc277e1c8`
  )
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
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
    .then(recipes => {
      dispatch(recipesSuccess(category, recipes));
    })
    .catch(error => dispatch(recipesFailed(error.message)));
};

export const recipesLoading = () => ({
  type: RECIPES_LOADING
});

export const recipesFailed = errMessage => ({
  type: RECIPES_FAILED,
  payload: errMessage
});

export const recipesSuccess = (category, recipes) => ({
  type: RECIPES_SUCCESS,
  payload: { category, recipes }
});

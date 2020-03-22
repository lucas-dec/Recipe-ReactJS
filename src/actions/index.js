export const fetchRecipes = category => dispatch => {
  dispatch({ type: "FETCH_REQUEST" });
  return fetch(
    `https://api.spoonacular.com/recipes/search?query=${category}&number=6&apiKey=bff6f87cb12a492ab3b79fcdc277e1c8`
  )
    .then(payload => {
      console.log(payload);
      dispatch({ type: "FETCH_SUCCESS", payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: "FETCH_FAILURE" });
    });
};

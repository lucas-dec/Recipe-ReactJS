export const removeDuplicateRecipe = recipes => {
  const tempRecipes = {};
  return recipes.filter(recipe => {
    const identifier = JSON.stringify(recipe.title);
    if (tempRecipes[identifier]) return false;

    tempRecipes[identifier] = true;
    return true;
  });
};

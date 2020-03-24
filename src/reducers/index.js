import {
  RECIPES_LOADING,
  RECIPES_FAILED,
  RECIPES_SUCCESS
} from "../actions/ActionTypes";

const initialState = {
  isLoading: true,
  error: null,
  mainCourse: [],
  salad: [],
  drink: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPES_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case RECIPES_SUCCESS:
      if (action.payload.category === "main course")
        action.payload.category = "mainCourse";
      return {
        ...state,
        isLoading: false,
        error: null,
        [action.payload.category]: [
          ...state[action.payload.category],
          ...action.payload.recipes.recipes
        ]
      };
    case RECIPES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;

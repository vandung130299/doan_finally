import { categoryConstants } from "../constants/ActionTypes";

const initState = {
  categories: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_REQUEST: {
      state = {
        ...state,
        categories: action.payload.categories
      }
      break;
    }
  }
  return state;
}
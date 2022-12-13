import { brandConstants } from "../constants/ActionTypes";

const initState = {
  brands: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case brandConstants.GET_ALL_BRAND_REQUEST: {
      state = {
        ...state,
        brands: action.payload.brands
      }
      break;
    }
  }
  return state;
}
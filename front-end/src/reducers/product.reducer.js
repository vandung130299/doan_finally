import { productConstants } from "../constants/ActionTypes";

const initialState = {
  currentPage:0,
  totalItems: 0,
  totalPages: 0,
  products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCTS_REQUEST:
      state = {
        ...state,
        products: action.payload.products,
        currentPage: action.payload.currentPage,
        totalItems: action.payload.totalItems,
        totalPages: action.payload.totalPages
      }
      break;
  }

  return state;
}
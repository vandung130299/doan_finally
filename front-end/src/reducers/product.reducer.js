import { productConstants } from "../constants/ActionTypes";

const initialState = {
  page:0,
  pageSize: 0,
  total: 0,
  products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCTS_SUCCESS:
      state = {
        ...state,
        products: action.payload.products,
        total: action.payload.total,
        pageSize: action.payload.pageSize
      }
      break;
  }

  return state;
}
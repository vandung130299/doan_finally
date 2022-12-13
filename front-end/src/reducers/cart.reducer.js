import { cartConstants } from "../constants/ActionTypes";

const initState = {
  cartItems: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case cartConstants.GET_TO_CARTS:
      state = {
        ...state,
        cartItems: action.payload.cartItems
      }
      break;
    case cartConstants.ADD_TO_CART_REQUEST:
      state = {
        ...state,
        cartItems: [...action.payload.cartItems]
      }
      break;
    case cartConstants.RESET_CART:
      state = {
        ...initState
      }
  }
  return state;
}
// import { cartConstants } from "../constants/ActionTypes";

// const initState = {
//   cartItems: [],
//   loading: false,
//   error: null,
//   total: null,
//   pageSize: null,
//   page: null
// };

// export default (state = initState, action) => {
//   switch (action.type) {
//     case cartConstants.GET_ALL_CART_REQUEST: {
//       state = {
//         ...state,
//         loading: true
//       }
//       break;
//     }
//     case cartConstants.GET_ALL_CART_SUCCESS: {
//       state = {
//         ...state,
//         ...action.payload
//       }
//       break;
//     }
//     case cartConstants.GET_ALL_CART_FAILURE: {
//       state = {
//         ...state,
//         loading: false,
//         error: action.payload.error
//       }
//       break;
//     }
//   }
//   return state;
// }

import { cartConstants } from "../constants/ActionTypes";

const initState = {
  cartItems: {},
  updatingCart: false,
  error: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART_REQUEST:
      state = {
        ...state,
        updatingCart: true
      }
      break;
    case cartConstants.ADD_TO_CART_SUCCESS:
      state = {
        ...state,
        cartItems: action.payload.cartItems,
        updatingCart: false
      }
      break;
    case cartConstants.ADD_TO_CART_FAILURE:
      state = {
        ...state,
        updatingCart: false,
        error: action.payload.error
      }
      break;
    case cartConstants.RESET_CART:
      state = {
        ...initState
      }
  }
  return state;
}
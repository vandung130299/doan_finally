import { userConstants } from "../constants/ActionTypes";

const initState = {
  orders: [],
  orderDetails: {},
  error: null,
  loading: false,
  orderFetching: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case userConstants.GET_USER_ORDER_REQUEST:
      state = {
        ...state,
        orderFetching: true,
      };
      break;
    case userConstants.GET_USER_ORDER_SUCCESS:
      state = {
        ...state,
        orders: action.payload.orders,
        orderFetching: false,
      };
      break;
    case userConstants.GET_USER_ORDER_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        orderFetching: false,
      };
      break;
    // case userConstants.GET_USER_ORDER_DETAILS_REQUEST:
    //   break;
    // case userConstants.GET_USER_ORDER_DETAILS_SUCCESS:
    //   state = {
    //     ...state,
    //     orderDetails: action.payload.order,
    //   };
    //   break;
    // case userConstants.GET_USER_ORDER_DETAILS_FAILURE:
    //   break;
    // case userConstants.ADD_USER_ORDER_SUCCESS:
    //   state = {
    //     ...state,
    //     placedOrderId: action.payload.order._id,
    //   };
    //   break;
  }

  return state;
};

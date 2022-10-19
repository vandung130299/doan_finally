import { userConstants, cartConstants } from "./../constants/ActionTypes"
import axios from "../utils/axios"
import { toast } from "react-toastify";
import { getCartItems } from ".";

export const signUp = (user) => {
  return async (dispatch) => {
    await axios.post('/signup', { ...user })
      .then(res => {
        console.error('res-user: ', res)
      });
  }
}


export const addOrder = (payload) => {
  let items = [];
  let totalAmount = 0;
  for (const key in payload) {
    if (Object.hasOwnProperty.call(payload, key)) {
      totalAmount = (payload[key].price - (payload[key].price * payload[key].offer / 100)) * payload[key].qty;
      items.push({
        productId: payload[key]._id,
        payablePrice: payload[key].price - (payload[key].price * payload[key].offer / 100),
        purchasedQty: payload[key].qty,
        name: payload[key].name,
        quantity: payload[key].quantity
      })
    }
  }
  return async (dispatch) => {
    try {
      const res = await axios.post(`/order/addOrder`, { items, totalAmount });
      console.error('add order: ', res);
      // dispatch({ type: userConstants.ADD_USER_ORDER_REQUEST });
      if (res.status === 201) {
        toast.success('Đặt hàng thành công!');
        dispatch({
          type: cartConstants.ADD_TO_CART_SUCCESS,
          payload: { cartItems: [] },
        });
        // const { order } = res.data;
        // dispatch({
        //   type: cartConstants.RESET_CART,
        // });
        // dispatch({
        //   type: userConstants.ADD_USER_ORDER_SUCCESS,
        //   payload: { order },
        // });
        // // const {
        // //   address: { address },
        // // } = res.data;
        // // dispatch({
        // //   type: userConstants.ADD_USER_ADDRESS_SUCCESS,
        // //   payload: { address },
        // // });
      } else {
        toast.error('Lỗi: ' + res.data.message);
        // const { error } = res.data;
        // dispatch({
        //   type: userConstants.ADD_USER_ORDER_FAILURE,
        //   payload: { error },
        // });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/order/getOrders`);
      // console.error('order request: ', res)
      dispatch({ type: userConstants.GET_USER_ORDER_REQUEST });
      if (res.status === 200) {
        console.log(res);
        const { orders } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_SUCCESS,
          payload: { orders },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// single order with complete info and delivery location
export const getOrder = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/getOrder`, payload);
      dispatch({ type: userConstants.GET_USER_ORDER_DETAILS_REQUEST });
      if (res.status === 200) {
        console.log(res);
        const { order } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_DETAILS_SUCCESS,
          payload: { order },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_DETAILS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};


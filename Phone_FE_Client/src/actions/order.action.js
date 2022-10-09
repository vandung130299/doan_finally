
import axiosInstance from "../helpers/axios";
import { orderConstants } from "./constants";

export const getCustomerOrders = () => {
  return async (dispatch) => {
    dispatch({ type: orderConstants.GET_CUSTOMER_ORDER_REQUEST });
    try {
      const res = await axiosInstance.get("/order/user");
      if (res.status === 200) {
        const { listOrder } = res.data;
        dispatch({
          type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
          payload: { listOrder },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: orderConstants.GET_CUSTOMER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};


export const updateOrder = (payload,id) => {
  return async (dispatch) => {
    dispatch({ type: orderConstants.UPDATE_CUSTOMER_ORDER_REQUEST });
    try {
      const res = await axiosInstance.post(`/order/${id}`, payload);
      if (res.status === 200) {
        dispatch({ type: orderConstants.UPDATE_CUSTOMER_ORDER_SUCCESS })
          dispatch(getCustomerOrders());
      } else {
        const { error } = res.data;
        dispatch({
          type: orderConstants.UPDATE_CUSTOMER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
import { toast } from "react-toastify";
import axiosInstance from "../helpers/axios";
import axios from "../helpers/axios";
import { orderConstants } from "./constants";

export const getAllOrder = () => {
  return (dispatch) => {
    axiosInstance.get('/order/all').then(res => {
      if (res.status === 200) {
        dispatch({
          type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
          payload: { listOrder: res.data.listOrder }
        })
      } else {
        toast.error('Get list order something error, please contact Admin!');
      }
    }).catch(err => {
      toast.error('Get list order something error, please contact Admin!');
    })
  }
}
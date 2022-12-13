import { Toast } from "react-bootstrap";
import axiosInstance from "../helpers/axios";
import { productConstants } from "./constants";

export const getProducts = () => {
  return (dispatch) => {
    axiosInstance.get(`product/all`).then(res => {
      if (res.status === 200) {
        const { products } = res.data;
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { products }
        });
      } else {
        Toast.error('Get list product something error, please contact Admin!');
      }
    }).catch(err => {
      Toast.error('Get list product something error, please contact Admin!');
    })
  };
};
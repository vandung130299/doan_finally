import axios from "../utils/axios";
import { api } from './../constants/Config';
import { productConstants } from "../constants/ActionTypes";
import { toast } from "react-toastify";

export const getListProduct = (categoryId, brandId, price, page, size,key) => {
  return async (dispatch) => {
    axios.get('/product/all', {
      params:
      {
        categoryId: categoryId,
        brandId: brandId,
        price: price,
        page,
        key,
        size
      }
    })
    .then((response) => {
      dispatch({
        type: productConstants.GET_ALL_PRODUCTS_REQUEST,
        payload: {
          products: response.data.products,
          currentPage: response.data.currentPage,
          totalItems: response.data.totalItems,
          totalPages: response.data.totalPages
        }
      });
    })
    .catch((error) => {
      toast.error('Lỗi hệ thống vui lòng liên hệ Admin')
    })
  };
};

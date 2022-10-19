import axios from "../utils/axios";
import { api } from './../constants/Config';
import { productConstants } from "../constants/ActionTypes";

export const getListProduct = (idCategory = '', idBrand = '', search = '', page = '', limit = '') => {
  // console.error('idCategory: ', idCategory);
  // console.error('idBrand: ', idBrand);
  if(page){
    page-=1;
  }
  return async (dispatch) => {
    try {
      dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
      const res = await axios.get(`/product/list?category=${idCategory}&brand=${idBrand}&search=${search}&page=${page}&limit=${limit}`);
      console.error('res', res);
      if (res.status === 200) {
        const { products, total, pageSize } = res.data;
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { products, total, pageSize },
        });
      } else {
        dispatch({ type: productConstants.GET_ALL_PRODUCTS_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

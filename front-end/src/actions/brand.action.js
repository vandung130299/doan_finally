import axios from "../utils/axios"
import { brandConstants } from "../constants/ActionTypes";

export const getAllBrand = () => {
  return async dispatch => {
    axios.get('/brand/all').then((res) => {
      dispatch({
        type: brandConstants.GET_ALL_BRAND_REQUEST,
        payload: {
          brands: res.data.brands
        }
      })
    });
  }
}

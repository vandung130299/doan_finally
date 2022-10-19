import axios from "../utils/axios"
import { brandConstants } from "../constants/ActionTypes";

export const getAllBrand = () => {
  return async dispatch => {
    dispatch({
      type: brandConstants.GET_ALL_BRAND_REQUEST
    })
    const res = await axios.get('/brand/listAll');
    if (res.status === 200) {
      dispatch({
        type: brandConstants.GET_ALL_BRAND_SUCCESS,
        payload: {
          ...res.data
        }
      })
    } else if (res.status === 400) {
      dispatch({
        type: brandConstants.GET_ALL_BRAND_FAILURE,
        payload: {
          error: res.data.error
        }
      })
    }
  }
}

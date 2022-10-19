import axios from "../utils/axios"
import { categoryConstants } from "../constants/ActionTypes";

export const getAllCategory = () => {
  return async dispatch => {
    const res = await axios.get('/category/listAll');
    if (res.status === 200) {
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
        payload: {
          ...res.data
        }
      })
    } else if (res.status === 400) {
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
        payload: {
          error: res.data.error
        }
      })
    }
  }
}

import axios from "../utils/axios"
import { categoryConstants } from "../constants/ActionTypes";
import { toast } from "react-toastify";

export const getAllCategory = () => {
  return async dispatch => {
    axios.get('/category/all').then(res => {
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORIES_REQUEST,
        payload: {
          categories: res.data.categories
        }
      })
    })
    .catch((err) => {
      // toast.error('Lỗi hệ thống vui long liên hệ Admin!')
    })
  }
}

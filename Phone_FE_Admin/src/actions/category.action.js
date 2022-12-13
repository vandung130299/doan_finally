import axiosInstance from "../helpers/axios";
import { categoryConstants } from "./constants";

export const getAllCategory = () => {
    return (dispatch) => {
        axiosInstance.get('/category/all').then(res => {
            if (res.status === 200) {
                const { categories } = res.data;
                dispatch({
                    type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                    payload: { categories }
                })
            }
        });
    }
}
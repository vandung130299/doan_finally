import axiosInstance from "../helpers/axios";
import { brandConstants } from "./constants";

export const getAllBrand = () => {
    return (dispatch) => {
        axiosInstance.get('/brand/all').then(res => {
            if (res.status === 200) {
                const { brands } = res.data;
                dispatch({
                    type: brandConstants.GET_ALL_BRANDS_SUCCESS,
                    payload: { brands }
                })
            }
        });
    }
}

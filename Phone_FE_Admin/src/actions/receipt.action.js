
import axiosInstance from "../helpers/axios";
import { receiptConstants } from "./constants";

export const getAllReceipt = () => {
    return async dispatch => {
        axiosInstance.get('/receipt/all').then(res => {
            if (res.status === 200) {
                const { listReceipt } = res.data;
                dispatch({
                    type: receiptConstants.GET_ALL_RECEIPT_SUCCESS,
                    payload: { listReceipt }
                })
            }
        });
    }
}


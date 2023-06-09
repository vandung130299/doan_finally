import axiosInstance from "../helpers/axios";
import { accountConstants } from "./constants";
import { toast } from 'react-toastify';

export const getListAccount = () => {
    return async dispatch => {
        dispatch({ type: 'LOADING' , loading: true});
        axiosInstance.get('/account/all').then((res)=>{
            dispatch({ type: 'LOADING' , loading: false});
            if (res.status === 200) {
                const { users } = res.data;
                dispatch({
                    type: accountConstants.GET_ALL_ACCOUNT_SUCCESS,
                    payload: { accounts: users }
                })
            }
        }).catch(err => {
            dispatch({ type: 'LOADING' , loading: false});
            toast.error('No results returned!');
        });
    }
}


export const createAccountUser = (user) => {
    return async (dispatch) => {
        try {
            dispatch({ type: accountConstants.SIGNUP_REQUEST });
            const res = await axiosInstance.post(`/signup`, user);
            if (res.status === 201) {
                dispatch({
                    type: accountConstants.SIGNUP_SUCCESS,
                });
                dispatch(getListAccount());
            } else if (res.status === 203) {
                dispatch({
                    type: accountConstants.SIGNUP_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const getOrdersByAccountId = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: accountConstants.GET_ORDERS_ACCOUNT_REQUEST });
            const { accountId } = payload.params;
            const res = await axiosInstance.get(`/account/${accountId}`);
            if (res.status === 200) {
                const { orders } = res.data;
                console.log(orders);

                dispatch({
                    type: accountConstants.GET_ORDERS_ACCOUNT_SUCCESS,
                    payload: { orders },
                });
                return orders;
            } else {
                const { error } = res.data;
                dispatch({
                    type: accountConstants.GET_ORDERS_ACCOUNT_FAILURE,
                    payload: { error },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

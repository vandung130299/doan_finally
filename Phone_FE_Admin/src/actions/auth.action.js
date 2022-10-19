import axiosInstance from "../helpers/axios";
import { authConstants } from "./constants";
import { toast } from 'react-toastify';
export const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING' , loading: true});
    axiosInstance.post("auth/signin", {
      ...user,
    }).then(res =>{
      if (res.status === 200 && res.data.role === 'ROLE_ADMIN') {
        toast.success('Login Success')
        dispatch({ type: 'LOADING' , loading: false});
        const { accessToken, userId, role, name } = res.data;
        const user = { userId, role, name };
        localStorage.setItem("token", accessToken);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            accessToken,
            user,
          },
        });
      } else {
        dispatch({ type: 'LOADING' , loading: false});
        toast.warning('User haven\'t permission!');
      }
    }).catch(err => {
      toast.error('Username or Password is incorrect!');
      dispatch({ type: 'LOADING' , loading: false});
    });
  };
};

//ktra da login chua
export const isUSerLoggedIn = (isToast = false) => {
  return async (dispatch) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          accessToken,
          user,
        },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    // const res = await axiosInstance.post('/admin/signout')
    // if (res.status === 200) {
    localStorage.clear();
    dispatch({ type: authConstants.LOGOUT_SUCCESS });
    // } else {
    //     dispatch({
    //         type: authConstants.LOGOUT_FAILURE,
    //         payload: { erorr: res.data.error }
    //     });
    // }
  };
};

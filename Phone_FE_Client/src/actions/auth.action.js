import axiosInstance from "../helpers/axios";
import { authConstants, cartConstants } from "./constants";

export const signup = (user) => {
    return async (dispatch) => {
      try {
        dispatch({ type: authConstants.SIGNUP_REQUEST });
        const res = await axiosInstance.post(`/signup`, user);
        if (res.status === 201) {
          dispatch({ type: authConstants.SIGNUP_SUCCESS });
          const { token, user } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: {
              token,
              user,
            },
          });
        } else {
          dispatch({ type: authConstants.SIGNUP_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

export const login = (user) => {
    console.log('action login', user)
    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST })
        // await
        const res =  axiosInstance.post('/auth/signin', {
            ...user
        });
        res.then((res)=>{
            if (res.status === 200) {
                const { accessToken, userId,role,name } = res.data;
                console.log('token', res.data)
                const user ={userId,role,name}
                localStorage.setItem('token', accessToken);
                localStorage.setItem('user', JSON.stringify(user));
                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: {
                        accessToken, user
                    }
                });
            } 
        })
        // else {
        //     // if (res.status === 400 ) {
        //         console.log('eqqqqqq')
        //         dispatch({
        //             type: authConstants.LOGIN_FAILURE,
        //             payload: {
        //                 error: res.error
        //             }
        //         });
        //     // }
        // }
        res.catch((error) => {
            if(error.response.status === 400) {

                alert('Không được để trống')
            }
            if(error.response.status === 401) {

                alert('Tài khoản hoặc mật khẩu bị sai')
            }
            console.log('  error:', error.response.data.error)
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {
                    error: error.response.data.error
                }
            });
          })

    }
}


//ktra da login chua 
export const isUSerLoggedIn = () => {
    return async dispatch => {
        const accessToken = localStorage.getItem('token');
        if (accessToken) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    accessToken, user
                }
            });
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {
                    error: 'Faild to login'
                }
            });
        }
    }
}

export const signout = () => {
    return async dispatch => {

        dispatch({ type: authConstants.LOGOUT_REQUEST })
        // const res = await axiosInstance.post('/signout')
        // if (res.status === 200) {
        // localStorage.removeItem('user');
        // localStorage.removeItem('token');
        localStorage.clear();
        dispatch({ type: authConstants.LOGOUT_SUCCESS });
        dispatch({ type: cartConstants.RESET_CART });
        // } else {
        //     dispatch({
        //         type: authConstants.LOGOUT_FAILURE,
        //         payload: { erorr: res.data.error }
        //     });
        // }

    }
}
import axios from "../utils/axios"
import { authConstants } from "../constants/ActionTypes";
import { toast } from 'react-toastify';

export const login = (user) => {
  return async (dispatch) => {

    dispatch({ type: authConstants.LOGIN_REQUEST })
    const res = await axios.post('/signIn', {
      ...user
    });
    console.error(res);
    if (res.status === 200 && !res.data.message) {
      toast.success('Đăng nhập thành công!')
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user
        }
      })
    } else {
      toast.error('Vui lòng kiểm tra lại tài khoản mật khẩu!');
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: {
            error: res.data.error
          }
        })
      }
    }
  }
}

export const isUserLoggedIn = () => {
  return async dispatch => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user
        }
      })
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          error: 'Failed to login'
        }
      })
    }
  }
}

export const signOut = () => {
  return async dispatch => {
    dispatch({
      type: authConstants.LOGOUT_REQUEST
    })
    const res = await axios.post('admin/signout');

    if (res.status === 200) {
      localStorage.clear();
      dispatch({
        type: authConstants.LOGOUT_SUCCESS
      })
    } else {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: {
          error: res.data.error
        }
      })
    }
  }
}

export const updateUser = (user) => {
  return async dispatch => {
    axios.post('/user/update', user).then(res => {
      if (res.status === 201) {
        toast.success("Cập nhập thông tin thành công!");
        localStorage.setItem('user', JSON.stringify(res.data.updatedUser));
        dispatch({
          type: authConstants.UPDATE_USER_SUCCESS,
          payload: {
            user: res.data.updatedUser
          }
        })
      } else {
        toast.error("Cập nhập thông tin thất bại!");
      }
    })
  }
}
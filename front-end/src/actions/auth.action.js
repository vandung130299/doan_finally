import axios from "../utils/axios"
import { authConstants } from "../constants/ActionTypes";
import { toast } from 'react-toastify';
import store from "../store";

export const login = (user) => {
  return (dispatch) => {
    // dispatch({ type: authConstants.LOGIN_REQUEST })
    axios.post('/auth/signin', {
      ...user
    }).then(res =>{
      toast.success('Đăng nhập thành công!')
      const { accessToken } = res.data;
      localStorage.setItem('token', accessToken);
      localStorage.setItem('user', JSON.stringify(res.data));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token: accessToken,
          user: res.data
        }
      })
    })
    .catch(err => {
      toast.error('Vui lòng kiểm tra lại tài khoản mật khẩu!');
    });
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
    }
  }
}

export const signOut = () => {
  return async dispatch => {
    localStorage.clear();
    toast.success("Đăng xuất thành công!");
    dispatch({
      type: authConstants.LOGOUT_SUCCESS
    })
  }
}

export const updateUser = (user) => {
  return async dispatch => {
    const { auth } = store.getState();
    axios.post('account/update', {...user, id: auth.user.userId, email: auth.user.email}).then(res => {
      toast.success("Cập nhập thông tin thành công!");
      localStorage.setItem('user', JSON.stringify(res.data));
      dispatch({
        type: authConstants.UPDATE_USER_SUCCESS,
        payload: {
          user: res.data
        }
      })
    })
    .catch(err => {
      toast.error(err);
    })
  }
}
import { authConstants } from "./../constants/ActionTypes";

const initState = {
  token: null,
  user: {
    name: '',
    email: '',
    role: '',
    address: '',
    phone: ''
  },
  authenticate: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: { ...action?.payload?.user},
        token: action.payload.token,
        authenticate: true,
      }
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initState
      }
      break;
    case authConstants.UPDATE_USER_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        loading: false,
        authenticate: true,
      }
      break;
  }
  return state;
}
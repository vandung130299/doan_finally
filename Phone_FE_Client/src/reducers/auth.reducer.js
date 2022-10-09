import { authConstants } from "../actions/constants";

const initState = {
    token: null,
    user: {
        userId: '',
        name: '',
        role: '',
    },
    authenticate: false,
    authenticating: false,

    //logout
    loading: false,
    error: null,
    message: '',
}

const authReducer = (state = initState, action) => {
    console.log(action)
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true,
            };
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                error: null,
                user: action.payload.user,
                token: action.payload.accessToken,
                authenticate: true,
                authenticating: false
            };
            break;
        case authConstants.LOGIN_FAILURE:
            state={
                ...state,
                error: action.payload.error,
                user: null,
                token: null,
                authenticate: false,
                authenticating: false
            };
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initState
            };
            break;
        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
            };
            break;
        default:
            break;
    }
    return state;
}
export default authReducer;
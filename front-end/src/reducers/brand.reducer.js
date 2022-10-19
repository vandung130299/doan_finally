import { brandConstants } from "../constants/ActionTypes";

const initState = {
  brands: [],
  loading: false,
  error: null,
  total: null,
  pageSize: null,
  page: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case brandConstants.GET_ALL_BRAND_REQUEST: {
      state = {
        ...state,
        loading: true
      }
      break;
    }
    case brandConstants.GET_ALL_BRAND_SUCCESS: {
      state = {
        ...state,
        ...action.payload
      }
      break;
    }
    case brandConstants.GET_ALL_BRAND_FAILURE: {
      state = {
        ...state,
        loading: false,
        error: action.payload.error
      }
      break;
    }
  }
  return state;
}
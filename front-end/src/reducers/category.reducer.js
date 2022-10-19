import { categoryConstants } from "../constants/ActionTypes";

const initState = {
  categories: [],
  loading: false,
  error: null,
  total: null,
  pageSize: null,
  page: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_REQUEST: {
      state = {
        ...state,
        loading: true
      }
      break;
    }
    case categoryConstants.GET_ALL_CATEGORIES_SUCCESS: {
      state = {
        ...state,
        ...action.payload
      }
      break;
    }
    case categoryConstants.GET_ALL_CATEGORIES_FAILURE: {
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
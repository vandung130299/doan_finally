
const initState = false;

const loadingReducer = (state = initState, action) => {
  if(action.type === 'LOADING'){
    state = action.loading
  }
  return state;
};

export default loadingReducer;
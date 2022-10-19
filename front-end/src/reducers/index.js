import {combineReducers} from 'redux';
import auth from './auth.reducer';
import category from './category.reducer';
import brand from './brand.reducer';
import product from './product.reducer';
import cart from './cart.reducer';
import user from './user.reducer';

const myReducer=combineReducers({
    user,
    auth,
    category,
    brand,
    product,
    cart
});
export default myReducer;
import axiosInstance from "../helpers/axios";
import store from "../store";
import { cartConstants } from "./constants";

const getCartItems = () => {
    return async dispatch => {
        dispatch({ type: cartConstants.GET_CART_REQUEST });
        const res = await axiosInstance.get(`/cart`);
        if (res.status === 200) {
            const { cartItems } = res.data;
            console.log({ getCartItems: cartItems })
            if (cartItems) {
                dispatch({
                    type: cartConstants.GET_CART_SUCCESS,
                    payload: { cartItems }
                })
            }
        } else {
            console.log('22222222')

        }
    }
}

export const addToCart = ((product, newQty = 1) => {
    return async dispatch => {

        const {
            cart: {
                cartItems
            },
            auth } = store.getState();

            // tim kiem vi tri cua san pham trong mang
            // neu ko co =>> -1
        const filteredCart = cartItems.findIndex(x =>
            x.productid == product.id
        );

        const qty = (cartItems[filteredCart] && filteredCart.lenght !== -1) ? (cartItems[filteredCart].quantity + newQty) : 1;

        if (auth.authenticate) {
            dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
            cartItems.push(
                {
                    productid: product.id,
                    quantity: qty
                }
            )
            const payload = {
                cartItems: cartItems
            };
            const res = await axiosInstance.post(`/cart`, payload);
            console.log(res);
            if (res.status === 200) {
                dispatch(getCartItems());
            }
        } else {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }
})

//remove theo id
export const removeCartItem = ((productid) => {
    return async dispatch => {

        const {
            cart: {
                cartItems
            },
            auth } = store.getState();

            // tim kiem vi tri cua san pham trong mang
            // neu ko co =>> -1
        const filteredCart = cartItems.findIndex(x =>
            x.productid == productid
        );

        if (auth.authenticate) {
            dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
            cartItems.splice(filteredCart,1);
            const payload = {
                cartItems: cartItems
            };
            const res = await axiosInstance.post(`/cart`, payload);
            console.log(res);
            if (res.status === 200) {
                dispatch(getCartItems());
            }
        } else {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }
})

export const checkOut = (payload) => {
    return async dispatch => {
        // dispatch({ type: cartConstants.CHECK_OUT_REQUEST });
        const res = await axiosInstance.post(`/checkout`,payload);
        if (res.status === 200) {
            // dispatch({ type: cartConstants.CHECK_OUT_REQUEST });
            alert(res.data.message);
        } else {
           
        }
    }
}

export {
    getCartItems
}
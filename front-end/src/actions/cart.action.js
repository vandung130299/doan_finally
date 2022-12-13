import axios from "../utils/axios"
import { cartConstants } from "../constants/ActionTypes";
import store from "../store";
import { toast } from "react-toastify";

const getCartItems = () => {
  return async (dispatch) => {
    axios.get(`/cart`).then(res => {
      const { cartItems } = res.data;
      if (cartItems) {
        dispatch({
          type: cartConstants.GET_TO_CARTS,
          payload: { cartItems },
        });
      }
    });
  };
};

export const emptyCartItems = () => {
  return async (dispatch) => {
    dispatch({
      type: cartConstants.GET_TO_CARTS,
      payload: { cartItems: [] },
    });
  };
};


export const addToCart = (product, newQty = 1, isNotification = false) => {
  return async (dispatch) => {
    const {cart: { cartItems }, auth } = store.getState();
    let indexProduct = cartItems.findIndex((item) => {
      return item.productid === product.id;
    });
    let payload;
    if(indexProduct === -1) {
      payload = {
        cartItems: [...cartItems, { ...product, productid: product.id, quantity: newQty }],
      };
    } else {
      cartItems[indexProduct] = { ...cartItems[indexProduct], quantity: cartItems[indexProduct].quantity + newQty };
      payload = {
        cartItems: [...cartItems],
      };
    }
    axios.post(`/cart`, payload)
    .then((res) => {
      dispatch({
        type: cartConstants.ADD_TO_CART_REQUEST,
        payload: payload,
      })
      if(isNotification) {
        toast.success('Thêm sản phẩm vào giỏ hàng thành công!')
      }
    })
    .catch(err => {
      toast.error('Lỗi cập nhập vui lòng liên hệ Admin để khắc phục!')
    })
  };
};

export const removeCartItem = (productid) => {
  return async (dispatch) => {
    let {cart: { cartItems }, auth } = store.getState();
    let indexProduct = cartItems.findIndex((item) => {
      return item.productid === productid;
    });
    cartItems.splice(indexProduct, 1);
    const payload = {
      cartItems: [...cartItems],
    };
    axios.post(`/cart`, payload)
    .then((res) => {
      dispatch({
        type: cartConstants.ADD_TO_CART_REQUEST,
        payload: payload,
      })  
    })
    .catch(err => {
      toast.error('Lỗi cập nhập vui lòng liên hệ Admin để khắc phục!')
    })
  };
};

export { getCartItems };



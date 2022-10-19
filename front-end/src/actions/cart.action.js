import axios from "../utils/axios"
import { cartConstants } from "../constants/ActionTypes";
import store from "../store";
import { toast } from "react-toastify";

// export const getCarts = () => {
//   return async dispatch => {
//     dispatch({
//       type: cartConstants.GET_ALL_CART_REQUEST
//     })
//     const res = await axios.get('/cart/getCartItems');
//     console.error('res1111', res);
//     if (res.status === 200) {
//       dispatch({
//         type: cartConstants.GET_ALL_CART_SUCCESS,
//         payload: {
//           ...res.data
//         }
//       })
//     } else if (res.status === 400) {
//       dispatch({
//         type: cartConstants.GET_ALL_CART_FAILURE,
//         payload: {
//           error: res.data.error
//         }
//       })
//     }
//   }
// }

const getCartItems = () => {
  return async (dispatch) => {
    try {
      console.log("getCartItemsdsad:");
      const res = await axios.post(`/cart/getCartItems`);
      console.log("getCartItems111:", res);
      if (res.status === 200) {
        const { cartItems } = res.data;
        console.log("getCartItems:", cartItems);
        if (cartItems) {
          dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: { cartItems },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const emptyCartItems = () => {
  return async (dispatch) => {
    dispatch({
      type: cartConstants.ADD_TO_CART_SUCCESS,
      payload: { cartItems: [] },
    });
  };
};


export const addToCart = (_id, newQty = 1) => {
  return async (dispatch) => {
    const payload = {
      cartItems: [
        {
          product: _id,
          quantity: newQty
        },
      ],
    };

    const res = await axios.post(`/cart/addtocart`, payload);
    if (res.status === 201) {
      toast.success('Thêm sản phẩm thành công');
      dispatch(getCartItems());
    } else {
      toast.error('Thêm sản phẩm thất bại');
    }
  };
};

export const removeCartItem = (_id) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/cart/removeItem`, { payload: { productId: _id } });
      if (res.status === 202) {
        toast.success('Xóa sản phẩm thành công');
        dispatch(getCartItems());
      } else {
        toast.error('Xóa sản phẩm thất bại');
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCart = () => {
  return async (dispatch) => {
    const { auth } = store.getState();
    let cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null;

    console.log("upppppppppp");

    if (auth.authenticate) {
      localStorage.removeItem("cart");
      //dispatch(getCartItems());
      if (cartItems) {
        const payload = {
          cartItems: Object.keys(cartItems).map((key, index) => {
            return {
              quantity: cartItems[key].qty,
              product: cartItems[key]._id,
            };
          }),
        };
        if (Object.keys(cartItems).length > 0) {
          const res = await axios.post(`/cart/addtocart`, payload);
          if (res.status === 201) {
            dispatch(getCartItems());
          }
        }
      } else {
        dispatch(getCartItems());
      }
    } else {
      if (cartItems) {
        dispatch({
          type: cartConstants.ADD_TO_CART_SUCCESS,
          payload: { cartItems },
        });
      }
    }
  };
};

export { getCartItems };



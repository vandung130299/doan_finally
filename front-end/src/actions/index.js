import { Redirect } from 'react-router';
import { toast } from 'react-toastify';
import callApi from '../utils/apiCaller';
import * as types from './../constants/ActionTypes';
export * from './auth.action';
export * from './user.action';
export * from './category.action';
export * from './brand.action';
export * from './product.action';
export * from './cart.action';

// export const actFetchProductsRequest = () => {
//     return (dispatch) => {
//         return callApi('product/listAll', 'GET', null).then(res => {
//             console.error('res products', res)
//             dispatch(actFetchProducts(res.data));
//         })
//     }
// }

// export const actFetchProducts = (products) => {
//     return {
//         type: types.FETCH_PRODUCTS,
//         products
//     }
// }

// export const actDeleteProductRequest = (id) => {
//     return (dispatch) => {
//         return callApi(`products/${id}`, 'DELETE', null).then(res => {
//             console.log(res)
//             dispatch(actDeleteProduct(id));
//         })
//     }
// }

// export const actDeleteProduct = (id) => {
//     return {
//         type: types.DELETE_PRODUCT,
//         id: parseInt(id)
//     }
// }

// export const actUpdateProductRequest = (body) => {
//     return dispatch => {
//         if (body.id) {
//             return callApi(`products/${body.id}`, 'PUT', body).then(res => {
//                 let bodyFake = {
//                     ...body,
//                     id: parseInt(body.id)
//                 }
//                 dispatch(actUpdateProduct(bodyFake));
//             })
//         } else {
//             return callApi(`products`, 'POST', body).then(res => {
//                 dispatch(actAddProduct(body));
//             })
//         }

//     }
// }
// export const actAddProduct = (body) => {
//     return {
//         type: types.ADD_PRODUCT,
//         body
//     }
// }
// export const actUpdateProduct = (body) => {
//     return {
//         type: types.UPDATE_PRODUCT,
//         body
//     }
// }



// export const actSearchProductRequest = (txtSearch) => {
//     return (dispatch) => {
//         return callApi(`products`, 'GET', null).then(res => {
//             let data = {
//                 txtSearch,
//                 products: res.data
//             }
//             console.log(data)
//             dispatch(actSearchProduct(data));
//         })
//     }
// }


// export const actSearchProduct = (data) => {
//     return {
//         type: types.SEARCH_PRODUCT,
//         data
//     }
// }

// //cart action
// export const actFetchCartRequest = (id) => {
//     return dispatch => {
//         return callApi(`carts`, 'GET', null, { id }).then(res => {
//             console.log(res);
//             //dispatch(actFetchCart(res.data.result));
//         })
//     }
// }
// export const actFetchCart = (carts) => {
//     return {
//         type: types.FETCH_CART,
//         carts
//     }
// }

// export const actAddCartRequest = (product, quantityOrder, token) => {
//     let { id } = product;
//     console.log(id)
//     let sl = quantityOrder;
//     return dispatch => {
//         return callApi('carts', 'POST', null, { token, id, sl }).then(res => {
//             console.log(res.data);
//             if (res.data.isStatus === 1) {
//                 toast.success("Đã thêm sản phẩm vào giỏ hàng!");
//                 dispatch(actAddCart(product, quantityOrder));
//             } else {
//                 toast.warn("Không thêm được sản phẩm vào giỏ hàng!");
//             }
//         })
//     }
// }
// export const actAddCart = (product, quantityOrder) => {
//     return {
//         type: types.ADD_CART,
//         payload: {
//             ...product,
//             quantityOrder
//         }
//     }
// }
// export const actUpdateDeleteCart = (product, quantityOrder, token) => {
//     const { id } = product;
//     return (dispatch) => {
//         if (quantityOrder === 0) {
//             actDeleteCartRequest(id, token)
//         } else {
//             actUpdateCartRequest(product, quantityOrder, token)
//         }
//     }
// }
// export const actUpdateCartRequest = (product, quantityOrder, token) => {
//     let sl = parseInt(quantityOrder);
//     let id = parseInt(product.id);
//     console.log(sl, id);
//     return dispatch => {
//         return callApi('carts', 'PUT', null, { token, id, sl }).then(res => {
//             console.log(res.data)
//             if (res.data.isStatus === 1) {
//                 dispatch(actUpdateCart(id, quantityOrder));
//             }
//         })
//     }
// }
// export const actUpdateCart = (id, quantityOrder) => {
//     return {
//         type: types.UPDATE_CART,
//         payload: {
//             id,
//             quantityOrder
//         }
//     }
// }
// export const actDeleteCartRequest = (idProduct, token) => {
//     let id = parseInt(idProduct);
//     return dispatch => {
//         return callApi('carts', 'DELETE', null, { token, id }).then(res => {
//             console.log(res.data)
//             if (res.data.isStatus === 1) {
//                 toast.success("Đã xóa sản phẩm vào giỏ hàng!");
//                 dispatch(actDeleteCart(idProduct));
//             } else {
//                 toast.warn("Không xóa được sản phẩm vào giỏ hàng!");
//             }
//         })
//     }
// }
// export const actDeleteCart = (id) => {
//     return {
//         type: types.DELETE_CART,
//         id
//     }
// }



// //get product detail
// export const actGetProductDetailRequest = (id) => {
//     return dispatch => {
//         return callApi(`products/${id}`, 'GET', null).then(res => {
//             dispatch(actGetProductDetail(res.data));
//         })
//     }
// }
// export const actGetProductDetail = (product) => {
//     return {
//         type: types.PRODUCT_DETAIL,
//         product
//     }
// }
// export const actEditingProduct = (product) => {
//     return {
//         type: types.EDITING_PRODUCT,
//         product
//     }
// }



// export const actFilterBrand = (brand) => {
//     return {
//         type: types.EDITING_BRAND,
//         brand
//     }
// }
// export const actFilterSearch = (search) => {
//     return {
//         type: types.EDITING_SEARCH,
//         search
//     }
// }



// export const actLoginRequest = (body) => {
//     console.log(body)
//     return dispatch => {
//         return callApi(`signIn`, 'POST', body, null).then(res => {
//             if (res.status === 200) {
//                 toast.success('Đăng nhập thành công!');
//                 const { token, user } = res.data;
//                 localStorage.setItem('token', token);
//                 localStorage.setItem('user', JSON.stringify(user));
//                 setTimeout(() => {
//                     dispatch(actLoginSuccess(res.data));
//                 }, 1000);
//             } else {
//                 toast.error('Kiểm tra lại sdt hoặc mật khẩu của bạn!');
//             }
//         })
//     }
// }
// export const actLoginSuccess = (data) => {
//     const { user, token } = data;
//     return {
//         type: types.LOGIN_SUCCESS,
//         payload: {
//             token,
//             user
//         }
//     }
// }
// export const actLogoutSuccess = () => {
//     toast.success('Đăng xuất thành công!');
//     return {
//         type: types.LOGOUT_SUCCESS
//     }
// }

// export const actRegisterRequest = (data) => {
//     return () => {
//         return callApi(`users`, 'POST', data).then(res => {
//             if (res.isStatus) {
//                 toast.success('Đăng ký thành công!');
//             } else {
//                 toast.error('Kiểm tra lại sdt của bạn!');
//             }
//         })
//     }
// }


// export const actGetUserRequest = (token) => {
//     return (dispatch) => {
//         return callApi(`users`, 'GET', null, { token }).then(res => {
//             if (res.isStatus !== 0) {
//                 dispatch(actGetUser(res.data));
//             }
//         })
//             .catch(err => console.log(err))
//     }
// }
// export const actGetUser = (user) => {
//     return {
//         type: types.GET_USER,
//         user
//     }
// }
// export const actGetSoldRequest = (token) => {
//     return (dispatch) => {
//         return callApi(`sold`, 'GET', null, { token }).then(res => {
//             if (res.data.isStatus !== 0) {
//                 console.log(res.data)
//                 dispatch(actGetSold(res.data.result));
//             } else {
//                 dispatch(actGetSold([]))
//             }
//         })
//             .catch(err => console.log(err))
//     }
// }
// export const actGetSold = (sold) => {
//     return {
//         type: types.GET_SOLD,
//         sold
//     }
// }


// export const actUpdateUserRequest = (data) => {
//     console.log(data)
//     return dispatch => {
//         return callApi(`users`, 'PUT', null, data).then(res => {
//             console.log(res.data);;
//             if (res.data.isStatus === 1) {
//                 toast.success('Chỉnh sửa thông tin thành công!');
//                 dispatch(actUpdateUser(data));
//             } else if (res.data.isStatus == 2) {
//                 toast.warn('Email này đã được sử dụng!');
//                 dispatch(actUpdateUser(null))
//             } else if (res.data.isStatus == 3) {
//                 toast.warn('Số điện thoại đã được sử dụng!');
//                 dispatch(actUpdateUser(null))
//             }
//         })
//             .catch(err => console.log(err))
//     }
// }
// export const actUpdateUser = (data) => {
//     return {
//         type: types.UPDATE_USER,
//         user: data
//     }
// }
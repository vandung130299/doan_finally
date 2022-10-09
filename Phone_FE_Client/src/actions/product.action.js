
import axiosInstance from "../helpers/axios"
import { productConstants } from "./constants";

export function getProductsByFilter(categoryId, brandId, price, page, size) {
    return function (dispatch) {
        console.log("props3", categoryId)
        dispatch({ type: productConstants.GET_FILTER_PRODUCTS_REQUEST })
        axiosInstance.get('/product/all', {
            params:
            {
                categoryId: categoryId,
                brandId: brandId,
                price: price,
                page,
                size
            }
        })
            .then((response) => {
                console.log(response)
                dispatch({
                    type: productConstants.GET_FILTER_PRODUCTS_SUCCESS,
                    payload: {
                        products: response.data.products,
                        page: response.data.currentPage
                    }
                });
            })
            .catch((error) => {
                dispatch({
                    type: productConstants.GET_FILTER_PRODUCTS_FAILURE,
                    payload: { error: error }
                });
            })
    }
};

export const getProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
        let res;
        try {
            const { productId } = payload.params;
            res = await axiosInstance.get(`/product/${productId}`);
            console.log(res);
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: res.data }
            });

        } catch (error) {
            console.log(error);
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error: error }
            });
        }

    }
}


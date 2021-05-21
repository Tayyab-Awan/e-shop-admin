import axios from "axios";
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_ADD_REQUEST,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_ADD_FAIL
} from '../constants/productConstants';
import { getAPIURL } from '../utills/APIUtills';

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
    try {
        const url = getAPIURL();
        const { data } = await axios.get(`${url}/api/products`);

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL
        })
    }
}

export const addProduct = (productData) => async (dispatch, getState) => {
    dispatch({
        PRODUCT_ADD_REQUEST
    })

    const { userLogin: { userInfo } } = getState();
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }
    const url = getAPIURL();

    try {
        const { data } = await axios.post(`${url}/api/products`, productData, config);
        dispatch({
            type: PRODUCT_ADD_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_ADD_FAIL
        })
    }
}
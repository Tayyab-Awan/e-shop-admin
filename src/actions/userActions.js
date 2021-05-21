import axios from "axios"
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_UNAUTHORIZED
} from '../constants/userConstants';
import { getAPIURL } from '../utills/APIUtills';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let url = getAPIURL();
        const { data } = await axios.post(
            `${url}/api/users/login`,
            { email, password },
            config
        )

        if (data.isAdmin) {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            })
            localStorage.setItem('userInfo', JSON.stringify(data))
        }
        else {
            dispatch({
                type: USER_LOGIN_UNAUTHORIZED,
                payload: 'Not authorized!'
            })
        }

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}
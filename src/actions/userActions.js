import axios from "axios"
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_UNAUTHORIZED
} from '../constants/userConstants';

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
        let url = '';
        if (process.env.NODE_ENV === 'production')
            url = process.env.REACT_APP_SERVICE_URI;
        else
            url = 'http://127.0.0.1:5000'

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
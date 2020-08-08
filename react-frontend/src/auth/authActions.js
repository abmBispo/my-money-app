import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import consts from '../consts';

export function login(values) {
    return (dispatch) => {
        axios.post(`${consts.OAPI_URL}/login`, values)
            .then((res) => dispatch({ type: 'USER_FETCHED', payload: res.data }))
            .catch((e) => e.response.data.errors.forEach((error) => toastr.error('Erro', error)))
    }
}

export function signup(values) {
    return (dispatch) => {
        axios.post(`${consts.OAPI_URL}/signup`, values)
            .then((res) => dispatch({ type: 'USER_FETCHED', payload: res.data }))
            .catch((e) => e.response.data.errors.forEach((error) => toastr.error('Erro', error)))
    }
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validateToken(token) {
    return (dispatch) => {
        if (token) {
            axios.post(`${consts.OAPI_URL}/validateToken`, { token })
                .then((res) => dispatch({ type: 'TOKEN_VALIDATED', payload: res.data.valid }))
                .catch((_) => dispatch({ type: 'TOKEN_VALIDATED', payload: false }));
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false });
        }
    }
}
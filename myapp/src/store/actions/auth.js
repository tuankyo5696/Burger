import * as type from './../constants/actionTypes';

export const authStart = () => {
    return {
        type: type.AUTH_START
    }
}

export const authFail = (error) => {
    return {
        type: type.AUTH_FAIL,
        error: error
    }
}

export const authSuccess = (authData) =>{
    return {
        type: type.AUTH_SUCCESS,
        authData: authData
    }
}

export const auth = (username,password,email) => {
    return dispatch => {
        dispatch(authStart());
    }
};
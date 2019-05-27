import * as type from './../constants/actionTypes';
import axios from 'axios';
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

export const authSuccess = (token, userId) => {
    return {
        type: type.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const auth = (email,password,isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAYkk2XZOlgQ4qxVrXOiGb2A1sq4vXmtiE';
        if (!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAYkk2XZOlgQ4qxVrXOiGb2A1sq4vXmtiE';
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
    };
    }
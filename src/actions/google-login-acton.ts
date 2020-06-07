import { Dispatch } from "redux";
import { authenticate } from "../remote/auth-service";
import { User } from "../models/User";

export const googleLoginActionTypes = {
    SUCCESSFUL_LOGIN_GOOGLE: 'MEME_SUCCESSFUL_LOGIN_GOOGLE',
    BAD_REQUEST_GOOGLE: 'MEME_BAD_REQUEST_GOOGLE',
    INVALID_CREDENTIALS_GOOGLE: 'MEME_INVALID_CREDENTIALS_GOOGLE',
    AUTHORIZATION_ERROR_GOOGLE: 'MEME_AUTHORIZATION_ERROR_GOOGLE',
    INTERNAL_SERVER_ERROR_GOOGLE: 'MEME_INTERNAL_SERVER_ERROR_GOOGLE'
}

export const googleLoginAction = (user: User) => async (dispatch: Dispatch) => {
    
    try {

        dispatch({
            type: googleLoginActionTypes.SUCCESSFUL_LOGIN_GOOGLE,
            payload: user
        });

    } catch (e) {

        let status = e.response.status;
        if (status === 400) {
            dispatch({
                type: googleLoginActionTypes.BAD_REQUEST_GOOGLE,
                payload: e.response.data.message
            });
        } else if (status === 401) {
            dispatch({
                type: googleLoginActionTypes.INVALID_CREDENTIALS_GOOGLE,
                payload: e.response.data.message
            });
        } else if (status === 403) {
            dispatch({
                type: googleLoginActionTypes.AUTHORIZATION_ERROR_GOOGLE,
                payload: e.response.data.message
            });
        } else {
            dispatch({
                type: googleLoginActionTypes.INTERNAL_SERVER_ERROR_GOOGLE,
                payload: e.response.data.message || 'Internal Server Error, connection failed!'
            });
        }

    }

}
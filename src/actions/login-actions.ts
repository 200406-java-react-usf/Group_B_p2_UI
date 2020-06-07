import { Dispatch } from "redux";
import { User } from "../models/User";
import { authenticate } from "../remote/auth-service";

export const loginActionTypes = {
    SUCCESSFUL_LOGIN: 'MEME_SUCCESSFUL_LOGIN',
    BAD_REQUEST: 'MEME_BAD_REQUEST',
    INVALID_CREDENTIALS: 'MEME_INVALID_CREDENTIALS',
    AUTHORIZATION_ERROR: 'MEME_AUTHORIZATION_ERROR',
    INTERNAL_SERVER_ERROR: 'MEME_INTERNAL_SERVER_ERROR'
}

export const loginAction = (username: string, password: string) => async (dispatch: Dispatch) => {
    
    try {
        //Missing Authenticate remote to connect to API
        let authUser = await authenticate(username, password);
        //let authUser = User;
        dispatch({
            type: loginActionTypes.SUCCESSFUL_LOGIN,
            payload: authUser
        });

    } catch (e) {

        let status = e.response.status;
        if (status === 400) {
            dispatch({
                type: loginActionTypes.BAD_REQUEST,
                payload: e.response.data.message
            });
        } else if (status === 401) {
            dispatch({
                type: loginActionTypes.INVALID_CREDENTIALS,
                payload: e.response.data.message
            });
        } else if (status === 403) {
            dispatch({
                type: loginActionTypes.AUTHORIZATION_ERROR,
                payload: e.response.data.message
            });
        } else {
            dispatch({
                type: loginActionTypes.INTERNAL_SERVER_ERROR,
                payload: e.response.data.message || 'Internal Server Error, connection failed!'
            });
        }

    }

}
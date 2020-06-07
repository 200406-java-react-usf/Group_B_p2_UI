import { Dispatch } from "redux"
import { loginActionTypes } from "./login-actions";
import { logout } from "../remote/auth-service";
import { User } from "../models/User";

export const logoutActionTypes = {
    SUCCESSFUL_LOGOUT: 'SUCCESSFUL_LOGOUT',
    INTERNAL_SERVER_ERROR: 'LOGOUT_INTERNAL_SERVER_ERROR'
}

export const logoutAction = () => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: logoutActionTypes.SUCCESSFUL_LOGOUT,
            //@ts-ignore
            payload: null as User
        });

    } catch (e) {
        dispatch({
            type: logoutActionTypes.INTERNAL_SERVER_ERROR,
            payload: e.response.data.message
        })
    }
}
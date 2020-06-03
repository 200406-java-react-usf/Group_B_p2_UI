import { Dispatch } from "redux"
import { loginActionTypes } from "./login-actions";
import { logout } from "../remote/auth-service";

export const logoutActionTypes = {
    SUCCESSFUL_LOGOUT: 'SUCCESSFUL_LOGOUT',
    INTERNAL_SERVER_ERROR: 'LOGOUT_INTERNAL_SERVER_ERROR'
}

export const logoutAction = () => async (dispatch: Dispatch) => {
    try {
        let loggedOut = await(await logout());
        console.log(`logged out: ${loggedOut}`);
        dispatch({
            type: logoutActionTypes.SUCCESSFUL_LOGOUT,
            payload: loggedOut
        });

        dispatch({
            type: loginActionTypes.SUCCESSFUL_LOGIN,
            payload: loggedOut
        })
    } catch (e) {
        dispatch({
            type: logoutActionTypes.INTERNAL_SERVER_ERROR,
            payload: e.response.data.message
        })
    }
}
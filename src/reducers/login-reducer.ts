import { ILoginState } from ".";
import { User } from "../models/User";
import { AnyAction } from "redux";
import { loginActionTypes } from "../actions/login-actions";
import { logoutActionTypes } from "../actions/logout-action";

const initialState: ILoginState = {
    // @ts-ignore
    authUser: (null as User),
    errorMessage: ''
}

export const loginReducer = (state: ILoginState = initialState, action: AnyAction) => {

    switch (action.type) {
        case loginActionTypes.SUCCESSFUL_LOGIN:
            return {
                ...state,
                authUser: action.payload
            }

        case logoutActionTypes.SUCCESSFUL_LOGOUT:
            return {
                ...state,
                authUser: action.payload
            }    
        case loginActionTypes.INVALID_CREDENTIALS:
        case loginActionTypes.AUTHORIZATION_ERROR:
        case loginActionTypes.BAD_REQUEST:
        case loginActionTypes.INTERNAL_SERVER_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }

        default:
            return state;

    }

}
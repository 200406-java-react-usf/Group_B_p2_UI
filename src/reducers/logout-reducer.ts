import { AnyAction } from "redux"
import { logoutActionTypes } from "../actions/logout-action"
import { INavbarState } from "."
import { User } from "../models/User"


const initialState: INavbarState = {
    // @ts-ignore
    authUser: (null as User), 
    errorMessage: ''
}

export const logoutReducer = (state: INavbarState = initialState, action: AnyAction) => {
    switch(action.type) {
        case logoutActionTypes.SUCCESSFUL_LOGOUT:
            console.log('successful logout');
            console.log(`aciton payload: ${action.payload}`);
            return {
                ...state, 
                authUser: action.payload
            }
        case logoutActionTypes.INTERNAL_SERVER_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}
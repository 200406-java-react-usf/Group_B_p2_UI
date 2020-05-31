import { AnyAction } from "redux";
import { IRegisterState } from ".";
import { registerActionTypes } from "../actions/register-actions"


const initialState: IRegisterState ={
    // @ts-ignore
    authUser: (null as User),
    errorMessage: ''
}


export const registerReducer = (state: IRegisterState = initialState, action: AnyAction) => {
    switch (action.type) {
        case registerActionTypes.SUCCESSFUL_REGISTRATION:
            return {
                ...state,
                authUser: action.payload
            }

        case registerActionTypes.BAD_REQUEST:
        case registerActionTypes.INTERNAL_SERVER_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }

        default:
            return state;

    }

}

import { AnyAction } from "redux"
import { logoutActionTypes } from "../actions/logout-action"
import { INavbarState } from "."
import { User } from "../models/User"
import { Inventory } from "../models/Inventory"


const initialState: INavbarState = {
    // @ts-ignore
    cart: ({} as Array<Inventory>),
    errorMessage: ''
}

export const navbarReducer = (state: INavbarState = initialState, action: AnyAction) => {
    switch(action.type) {
        // case logoutActionTypes.SUCCESSFUL_LOGOUT:
            
        //     return {
        //         ...state, 
        //         authUser: action.payload
        //     }
        // case logoutActionTypes.INTERNAL_SERVER_ERROR:
        //     return {
        //         ...state,
        //         errorMessage: action.payload
        //     }
        default:
            return state
    }
}
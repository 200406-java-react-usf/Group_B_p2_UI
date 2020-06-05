import { AnyAction } from "redux";
import { IItemDetailsState } from ".";
import { Inventory } from "../models/Inventory";
import { addItemsActionTypes } from "../actions/item-details-actions";

const initialState: IItemDetailsState ={
    //@ts-ignore
    thisItem: ([] as Inventory[])
}


export const itemDetailsReducer = (state: IItemDetailsState = initialState, action: AnyAction) => {
    switch (action.type) {
        case addItemsActionTypes.SUCCESSFUL_ADD_ITEM:
            return {
                ...state,
                thisItem: action.payload
            }

        case addItemsActionTypes.BAD_REQUEST:
        case addItemsActionTypes.INTERNAL_SERVER_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }

        default:
            return state;

    }
}
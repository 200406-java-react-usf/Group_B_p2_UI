import { AnyAction } from "redux";
import { IBrowseItemsState } from ".";
import {thisItemActionTypes} from "../actions/browse-items-actions"
import { Inventory } from "../models/Inventory";

const initialState: IBrowseItemsState ={
    //@ts-ignore
    thisItem: (null as Inventory)
}


export const browseItemsReducer = (state: IBrowseItemsState = initialState, action: AnyAction) => {
    switch (action.type) {
        case thisItemActionTypes.SUCCESSFUL_SET_THIS_ITEM:
            return {
                ...state,
                thisItem: action.payload
            }

        case thisItemActionTypes.BAD_REQUEST:
        case thisItemActionTypes.INTERNAL_SERVER_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }

        default:
            return state;

    }
}
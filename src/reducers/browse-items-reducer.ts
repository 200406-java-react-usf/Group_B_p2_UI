import { AnyAction } from "redux";
import { IBrowseItemsState } from ".";
import {thisItemActionTypes} from "../actions/browse-items"

const initialState: IBrowseItemsState ={
    thisItemId: 0
}


export const browseItemsReducer = (state: IBrowseItemsState = initialState, action: AnyAction) => {
    switch (action.type) {
        case thisItemActionTypes.SUCCESSFUL_SET_THIS_ITEM:
            return {
                ...state,
                thisItemId: action.payload
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
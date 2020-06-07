import { AnyAction } from "redux";
import { INewItemState } from ".";
import { newItemActionTypes } from "../actions/new-item-action";
import { NewInventory } from "../models/NewInventory";

const initialState: INewItemState ={
    //@ts-ignore
    newItem: (null as NewInventory),
}


export const newItemReducer = (state: INewItemState = initialState, action: AnyAction) => {
    switch (action.type){
        case newItemActionTypes.SUCCESSFUL_NEW_ITEM:
            return {
                ...state,
                newItem: action.payload
            }
        case newItemActionTypes.BAD_REQUEST:
        case newItemActionTypes.INTERNAL_SERVER_ERROR:
            return {
                ...state,
                errorMessage: action.payload 
            }
        default:
            return state;
    }
}
import { AnyAction } from "redux";
import { IBrowseItemsState } from ".";
import { Inventory } from "../models/Inventory";

const initialState: IBrowseItemsState ={
    inventory: ({} as Array<Inventory>),
    thisItemId: 0
}


export const browseItemsReducer = (state: IBrowseItemsState = initialState, action: AnyAction) => {

}
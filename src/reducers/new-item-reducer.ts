import { AnyAction } from "redux";
import { INewItemState } from ".";

const initialState: INewItemState ={
    // @ts-ignore
    newItem: (null as NewInventory)
}


export const newItemReducer = (state: INewItemState = initialState, action: AnyAction) => {
    
}
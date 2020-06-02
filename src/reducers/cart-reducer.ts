import { AnyAction } from "redux";
import { ICartState } from ".";
import { Inventory } from "../models/Inventory";

const initialState: ICartState ={
    cart: ({} as Array<Inventory>)
}


export const cartReducer = (state: ICartState = initialState, action: AnyAction) => {

}
import { AnyAction } from "redux";
import { IItemDetailsState } from ".";
import { Inventory } from "../models/Inventory";

const initialState: IItemDetailsState ={
    //@ts-ignore
    thisItem: (null as Inventory)
}


export const itemDetailsReducer = (state: IItemDetailsState = initialState, action: AnyAction) => {

}
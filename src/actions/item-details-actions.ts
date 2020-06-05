import { Dispatch } from "redux";
import { Inventory } from "../models/Inventory";

export const addItemsActionTypes = {
    SUCCESSFUL_ADD_ITEM: 'MEME_SUCCESSFUL_ADD_ITEM',
    BAD_REQUEST: 'MEME_BAD_REQUEST',
    INTERNAL_SERVER_ERROR: 'MEME_INTERNAL_SERVER_ERROR'
}

export const detailsAction = (cartItems: Array<Inventory>) => async (dispatch: Dispatch) => {
    
    try {
        
        dispatch({
            type: addItemsActionTypes.SUCCESSFUL_ADD_ITEM,
            payload: cartItems
        });

    } catch (e) {

        let status = e.response.status;
        if (status === 400) {
            dispatch({
                type: addItemsActionTypes.BAD_REQUEST,
                payload: e.response.data.message
            });
        } else {
            dispatch({
                type: addItemsActionTypes.INTERNAL_SERVER_ERROR,
                payload: e.response.data.message || 'Internal Server Error'
            });
        }

    }

}
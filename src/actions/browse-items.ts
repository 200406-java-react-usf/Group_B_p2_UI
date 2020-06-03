import { Dispatch } from "redux";

export const thisItemActionTypes = {
    SUCCESSFUL_SET_THIS_ITEM: 'MEME_SUCCESSFUL_SET_THIS_ITEM',
    BAD_REQUEST: 'MEME_BAD_REQUEST',
    INTERNAL_SERVER_ERROR: 'MEME_INTERNAL_SERVER_ERROR'
}

export const browseAction = (thisItemId: number) => async (dispatch: Dispatch) => {
    
    try {
        let thisItem = thisItemId;
        dispatch({
            type: thisItemActionTypes.SUCCESSFUL_SET_THIS_ITEM,
            payload: thisItem
        });

    } catch (e) {

        let status = e.response.status;
        if (status === 400) {
            dispatch({
                type: thisItemActionTypes.BAD_REQUEST,
                payload: e.response.data.message
            });
        } else {
            dispatch({
                type: thisItemActionTypes.INTERNAL_SERVER_ERROR,
                payload: e.response.data.message || 'Internal Server Error'
            });
        }

    }

}
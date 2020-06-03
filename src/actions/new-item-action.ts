import {NewInventory} from '../models/NewInventory';
import {Dispatch} from 'redux';
import {newInventory} from '../remote/inventory-service';


export const newItemActionTypes = {
	SUCCESSFUL_NEW_ITEM: 'SUCCESSFUL_NEW_ITEM:',
	BAD_REQUEST: 'STORE_BAD_REQUEST',
	INTERNAL_SERVER_ERROR: 'STORE_INTERNAL_SERVER_ERROR'
}

export const newItemAction = (newItem: NewInventory) => async (dispatch: Dispatch) =>{
	try {
		let addedItem = await newInventory(newItem.item_name, newItem.details, newItem.cost, newItem.category, newItem.item_image);
		
		dispatch({
			type: newItemActionTypes.SUCCESSFUL_NEW_ITEM,
			payload: addedItem
		});

	}catch(e){
		let status = e.response.data.statusCode;
		if(status === 400) {
			dispatch({
				type: newItemActionTypes.BAD_REQUEST,
				payload: e.response.data.message
			});
		}else{
			dispatch({
				type: newItemActionTypes.INTERNAL_SERVER_ERROR,
				payload: e.response.data.message || 'Uh oh! We could not reach the server!'
			});
		}
	}
}

import {Dispatch} from 'redux';
import { Inventory } from '../models/Inventory';
import { User } from '../models/User';
import { newInvoice } from '../remote/invoices-service';

export const cartActionTypes = {
	SUCCESSFUL_INVOICE_CREATED: 'MEME_STORE_SUCCESSFUL_INVOICE_CREATED',
    BAD_REQUEST: 'MEME_STORE_BAD_REQUEST',
    INVALID_INVOICE: 'MEME_STORE_INVALID_INVOICE',
	INTERNAL_SERVER_ERROR: 'MEME_STORE_INTERNAL_SERVER_ERROR'
}

export const cartAction = (items: Inventory[], user: User) => async (dispatch: Dispatch) =>{
	try {
        
        let totalCost: number = 0;
        let itemIds: number[] = [];

        items.forEach(item => itemIds.push(item.item_id))
        items.forEach(item => totalCost = totalCost + item.cost)

        let completedInvoice = await newInvoice(user.user_id, totalCost, itemIds)
		dispatch({
            
			type: cartActionTypes.SUCCESSFUL_INVOICE_CREATED,
			payload: completedInvoice
		});

	}catch(e){
		let status = e.response.data.statusCode;
		if(status === 400) {
			dispatch({
				type: cartActionTypes.BAD_REQUEST,
				payload: e.response.data.message
			});
		}else{
			dispatch({
				type: cartActionTypes.INTERNAL_SERVER_ERROR,
				payload: e.response.data.message || 'Uh oh! We could not reach the server!'
			});
		}
	}
}
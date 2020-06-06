import { memeStoreClient } from "./memestore-client";

export async function getAllInvoices(){
	let response = await memeStoreClient.get('/invoices');
	return await response.data;
}

export async function getInvoiceById(id: number){
	let response = await memeStoreClient.get(`/invoices/id?value=${id}`);
	return response.data;
}

export async function newInvoice(user_id: number, total_cost: number, items: Array<number>){
	let response = await memeStoreClient.post('/invoice',{user_id, total_cost, items});
	return response.data;
}




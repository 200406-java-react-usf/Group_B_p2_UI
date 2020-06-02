import { memeStoreClient } from "./memestore-client";

export async function getAllInvoices(){
	let response = await memeStoreClient.get('/memestore/invoices');
	return await response.data;
}

export async function getInvoiceById(id: number){
	let response = await memeStoreClient.get(`/memestore/invoices/id?value=${id}`);
	return response.data;
}

export async function newInvoice(user_id: number, total_cost: number){
	let response = await memeStoreClient.post('/memestore/invoice',{user_id, total_cost});
	return response.data;
}




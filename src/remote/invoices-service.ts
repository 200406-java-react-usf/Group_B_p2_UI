import { memeStoreClient } from "./memestore-client";
import { Inventory } from "../models/Inventory";

export async function getAllInvoices(){
	let response = await memeStoreClient.get('/invoices');
	return await response.data;
}

export async function getInvoiceById(id: number){
	let response = await memeStoreClient.get(`/invoices/id?value=${id}`);
	return response.data;
}

<<<<<<< HEAD
export async function newInvoice(user_id: number, total_cost: number, itemIds: number[]){
	let response = await memeStoreClient.post('/memestore/invoice',{user_id, total_cost, itemIds});
=======
export async function newInvoice(user_id: number, total_cost: number, items: Array<number>){
	let response = await memeStoreClient.post('/invoice',{user_id, total_cost, items});
>>>>>>> e309da0711737ac6f352e95f0f23868ff9f77f0d
	return response.data;
}




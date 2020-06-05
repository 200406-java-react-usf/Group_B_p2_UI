import { memeStoreClient } from "./memestore-client";


export async function getAllInventory(){
	let response = await memeStoreClient.get('/inventory');
	return await response.data;
}

export async function getInventoryById(id:number){
	let response = await memeStoreClient.get(`/inventory/id?value=${id}`);
	return response.data;
}

export async function newInventory(item_name: string, details:string, cost: number, category: string, item_image:string){
	let response = await memeStoreClient.post('/inventory', {item_name, details,cost,category,item_image});
	return response.data;
}

export async function deleteUser(id: number){
	let response = await memeStoreClient.delete(`/inventory/delete?id=${id}`);
	return await response.data;
}
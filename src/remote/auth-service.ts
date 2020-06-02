import { memeStoreClient } from "./memestore-client";

export async function authenticate(username: string, password: string){
	let response = await memeStoreClient.post('./memestore/auth',{username, password});
	return await response.data;
}

export async function logout(){
	let response = await memeStoreClient.get('/memestore/auth');
	return await response;
}
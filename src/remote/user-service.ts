import { User } from "../models/User";
import { NewUser } from "../models/NewUser";
import { memeStoreClient } from "./memestore-client";

export async function register(NewUser: NewUser){
	let response = await memeStoreClient.post('/users', NewUser);
	console.log(response);
	return await response.data;
}


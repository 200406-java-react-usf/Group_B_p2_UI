import axios from 'axios';

export const memeStoreClient = axios.create({
	//baseURL: 'http://localhost:8080',
	baseURL: 'Project2Api-env.eba-t2d87vnp.us-east-2.elasticbeanstalk.com',
	headers: {
		'Content-Type': 'application/json'
	}
})
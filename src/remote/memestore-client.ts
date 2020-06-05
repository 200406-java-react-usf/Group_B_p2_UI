import axios from 'axios';

export const memeStoreClient = axios.create({
	baseURL: 'http://project2api-env.eba-t2d87vnp.us-east-2.elasticbeanstalk.com',
	headers: {
		'Content-Type': 'application/json'
	}
})
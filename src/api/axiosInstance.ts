import axios from 'axios';

const riotAxiosInstance = axios.create({
	// TODO add environment
	// baseURL: 'https://europe.api.riotgames.com',
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 10000,
	headers: {
		'content-Type': 'application/json',
		// TODO add environment
		// 'X-Riot-Token': process.env.REACT_APP_RIOT_API_KEY,
	},
});

export default riotAxiosInstance;

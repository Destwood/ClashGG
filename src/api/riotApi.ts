import riotAxiosInstance from './axiosInstance';

export const getSummonerByName = (gameName: string, tagLine: string) => {
	// TODO add environment
	// return riotAxiosInstance.get(`/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`);
	return riotAxiosInstance.get(`/todos/1`);
};

import { getSummonerByName } from '../api/riotApi';

export class RiotServices {
	static async fetchSummonerData(gameName: string, tagLine: string) {
		return getSummonerByName(gameName, tagLine);
	}
}

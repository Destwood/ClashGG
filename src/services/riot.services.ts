import { getSummonerByName } from 'api/riotApi';

interface SummonerParams {
	gameName: string;
	tagLine: string;
}

export class RiotServices {
	static async fetchSummonerData({ gameName, tagLine }: SummonerParams) {
		return getSummonerByName(gameName, tagLine);
	}
}

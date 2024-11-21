import { IUser } from 'types';
import { Language, Themes } from 'utils/enums';

export const User = {
	initInfo: {
		id: '',
		username: '',
		email: '',
		firstName: '',
		lastName: '',
		profilePicture: null,
		games: [
			{ name: 'League of Legends', url: '' },
			{ name: 'CS:GO', url: '' },
			{ name: 'Dota 2', url: '' },
			{ name: 'Apex Legends', url: '' },
			{ name: 'Valorant', url: '' },
		],
		settings: {
			language: Language.english,
			theme: Themes.dark,
		},
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
		lastLogin: new Date().toISOString(),
	} as IUser,
};

export const initInfo = User.initInfo;

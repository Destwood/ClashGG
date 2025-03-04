import defaultProfilePic from "assets/profile.svg";
import { IUser } from 'types';
import { Language, Themes } from 'utils/enums';

export const User: IUser = {
	firebaseKey: 'users',
	initInfo: {
		id: '',
		username: '',
		email: '',
		firstName: '',
		lastName: '',
		profilePicture: defaultProfilePic,
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
	},
};

export const { firebaseKey, initInfo } = User;

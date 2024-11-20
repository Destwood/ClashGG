export interface IUser {
	email: string;
	token: string;
	id: string;
}

export interface IGame {
	name: string;
	url: string;
}

export interface ISettings {
	language: string;
	theme: string;
}

export interface IUserInfo {
	id: string;
	token: string;
	nickname: string;
	email: string;
	firstName: string;
	lastName: string;
	profilePicture: File | null;
	games: IGame[];
	settings: ISettings;
	createdAt: string;
	updatedAt: string;
	lastLogin: string;
}

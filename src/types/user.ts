export interface IUser {
	firebaseKey: string;
	initInfo: IUserInit;
}

export interface IUserInit {
	id: string;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	profilePicture: string | undefined;
	games: IGame[];
	settings: ISettings;
	createdAt: string;
	updatedAt: string;
	lastLogin: string;
}

export interface IGame {
	name: string;
	url: string;
}

export interface ISettings {
	language: string;
	theme: string;
}

export type IUserSettings = Partial<IUserInit>

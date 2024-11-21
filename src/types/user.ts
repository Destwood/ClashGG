export interface IGame {
	name: string;
	url: string;
}

export interface ISettings {
	language: string;
	theme: string;
}

export interface IUser {
	id: string;
	username: string;
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

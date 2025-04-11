import { createSlice } from '@reduxjs/toolkit';
import { IUserInit } from 'types';
import { Language, Themes } from 'utils/enums';

const initialState: IUserInit = {
	id: '',
	username: '',
	email: '',
	firstName: '',
	lastName: '',
	profilePicture: undefined,
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
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, { payload }) => {
			return payload;
		},
		clearUser: () => initialState,
	},
});

export const { setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'types';

const initialState: IUser = {
	email: '',
	token: '',
	id: '',
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

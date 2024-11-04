import { createSlice } from '@reduxjs/toolkit';

interface UserState {
	email: string;
	token: string;
	id: string;
}

const initialState: UserState = {
	email: '',
	token: '',
	id: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, { payload }) => {
			return {
				...state,
				email: payload.id,
				token: payload.token,
				id: payload.email,
			};
		},
		clearUser: () => initialState,
	},
});

export const { setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

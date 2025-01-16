import { createSlice } from '@reduxjs/toolkit';

interface ActiveGame {
	activeGame: string;
}

const initialState: ActiveGame = {
	activeGame: 'League of Legends',
};

const activeGame = createSlice({
	name: 'gameState',
	initialState,
	reducers: {
		setActiveGame(state, { payload }) {
			return {
				...state,
				activeGame: payload,
			};
		},
	},
});

export const { setActiveGame } = activeGame.actions;
export const activeGameReducer = activeGame.reducer;

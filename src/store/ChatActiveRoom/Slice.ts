import { createSlice } from '@reduxjs/toolkit';

interface ActiveGame {
	activeRoom: string;
}

const initialState: ActiveGame = {
	activeRoom: 'global',
};

const chatActiveRoom = createSlice({
	name: 'chatActiveRoom',
	initialState,
	reducers: {
		setActiveRoom(state, { payload }) {
			return {
				...state,
				activeRoom: payload,
			};
		},
	},
});

export const { setActiveRoom } = chatActiveRoom.actions;
export const activeRoomReducer = chatActiveRoom.reducer;

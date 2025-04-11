import { createSlice } from '@reduxjs/toolkit';

interface ActiveGame {
	// TODO will fix later, for now working on id instead of names
	activeRoom: any;
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

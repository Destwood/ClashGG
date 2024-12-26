import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
	roomList: ['global'],
};

const chatRoom = createSlice({
	name: 'roomList',
	initialState,
	reducers: {
		setRoomList(state, { payload }) {
			return {
				...state,
				roomList: payload,
			};
		},
	},
});

export const { setRoomList } = chatRoom.actions;
export const chatRoomReducer = chatRoom.reducer;

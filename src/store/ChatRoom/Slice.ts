import { createSlice } from '@reduxjs/toolkit';
import { IRoom } from 'types';
import { DefaultRoomNames } from 'utils/enums/chat';

interface ChatRoomState {
	roomList: IRoom[];
}

const initialState: ChatRoomState = {
	roomList: [{ name: DefaultRoomNames.global }],
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

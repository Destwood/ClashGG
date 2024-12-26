import { createSlice } from '@reduxjs/toolkit';
import { IRoomUser } from 'types/chat';

interface userList {
	userList: IRoomUser[] | null;
}

const initialState: userList = {
	userList: null,
};

const chatUser = createSlice({
	name: 'userList',
	initialState,
	reducers: {
		setUserList(state, { payload }) {
			return {
				...state,
				userList: payload,
			};
		},
	},
});

export const { setUserList } = chatUser.actions;
export const chatUserReducer = chatUser.reducer;

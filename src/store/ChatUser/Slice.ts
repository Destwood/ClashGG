import { createSlice } from '@reduxjs/toolkit';
import { IRoomUser } from 'types/chat';

interface userList {
	userList: IRoomUser[] | null;
	allUsers: IRoomUser[] | null;
}

const initialState: userList = {
	userList: null,
	allUsers: null,
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
		setAllChatUsers(state, { payload }) {
			return {
				...state,
				allUsers: payload,
			};
		},
	},
});

export const { setUserList, setAllChatUsers } = chatUser.actions;
export const chatUserReducer = chatUser.reducer;

import { configureStore } from '@reduxjs/toolkit';
import { activeGameReducer } from 'store/ActiveGame';
import { activeRoomReducer } from 'store/ChatActiveRoom';
import { chatRoomReducer } from 'store/ChatRoom';
import { chatUserReducer } from 'store/ChatUser';
import { modalReducer } from 'store/Modal';
import { userReducer } from 'store/User';

export const store = configureStore({
	reducer: {
		user: userReducer,
		modal: modalReducer,
		activeGame: activeGameReducer,
		roomList: chatRoomReducer,
		userList: chatUserReducer,
		allChatUsers: chatUserReducer,
		activeRoom: activeRoomReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

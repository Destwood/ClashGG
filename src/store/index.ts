import { configureStore } from '@reduxjs/toolkit';
import { activeGameReducer } from 'store/ActiveGame';
import { modalReducer } from 'store/Modal';

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		activeGame: activeGameReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

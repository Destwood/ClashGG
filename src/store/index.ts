import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from 'store/Modal';
import AuthModalSlice from './slices/AuthModalSlice';

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		authModal: AuthModalSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

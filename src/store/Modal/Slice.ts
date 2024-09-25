import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
	isOpen: boolean;
}

const initialState: ModalState = {
	isOpen: false,
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		togglePopup(state) {
			return {
				...state,
				isOpen: !state.isOpen,
			};
		},
	},
});

export const { togglePopup } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
export type State = ModalState;

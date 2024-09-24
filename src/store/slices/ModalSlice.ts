import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
	isOpen: boolean;
}

const initialState: ModalState = {
	isOpen: false,
};

const modalSlice = createSlice({
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
export default modalSlice.reducer;
export type State = ModalState;

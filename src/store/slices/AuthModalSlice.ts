import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalState } from 'types/auth';
import { Auth } from 'utils/enums/auth';

const initialState: ModalState = {
	typeOfModal: Auth.logIn,
};

const modalSlice = createSlice({
	name: 'modalAuth',
	initialState,
	reducers: {
		setAuthType(state, action: PayloadAction<Auth>) {
			return {
				...state,
				typeOfModal: action.payload,
			};
		},
	},
});

export const { setAuthType } = modalSlice.actions;
export default modalSlice.reducer;
export type State = ModalState;
